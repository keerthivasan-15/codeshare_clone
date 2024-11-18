import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSocketContext } from '../context/socketContext.jsx';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { debounce } from 'lodash';
import { EditorView } from '@codemirror/view';
import { oneDark } from '@codemirror/theme-one-dark';

const EditorTemplate = () => {
    const { id : roomId } = useParams();
    const { socket } = useSocketContext();
    const [code, setCode] = useState("// Write your code here!");

    useEffect(() => {
        if (!socket) {
            return;
        }

        const handleCodeShare = (data) => {
          setCode(data);
        }

        socket.emit("joinRoom",roomId);

        // Listen for incoming code changes
        socket.on("shareCode", (data) => {
            setCode(data);
        });

        return () =>{
          socket.off("shareCode",handleCodeShare);
        }
    }, [socket,roomId]);

    const handleEditorChange = debounce((value) => {
        setCode(value);

        // Emit code changes to the server
        if (socket) {
            socket.emit("codeChange", {roomId,data:value});
        }
    },300);

    return (
        <div className="h-screen">
            <CodeMirror
                value={code}
                height="100vh"
                extensions={[javascript(), EditorView.lineWrapping]} // Language and wrapping
                theme={oneDark}
                onChange={handleEditorChange}
            />
        </div>
    );
};

export default EditorTemplate;
