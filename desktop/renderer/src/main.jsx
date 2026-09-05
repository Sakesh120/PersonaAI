import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";
const API=import.meta.env.VITE_API_URL||"http://localhost:3001/api";
async function chat(message){const r=await fetch(`${API}/chat`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({message})});return r.json();}
function App(){const [messages,setMessages]=useState([]),[input,setInput]=useState(""),[busy,setBusy]=useState(false);
 async function send(e){e.preventDefault();if(!input.trim()||busy)return;const q=input;setInput("");setMessages(m=>[...m,{role:"user",text:q}]);setBusy(true);const data=await chat(q);setMessages(m=>[...m,{role:"assistant",text:data.answer||data.error}]);setBusy(false);}
 return <main><header><h1>Local AI Assistant</h1><span>Private, local-first workspace</span></header><section className="chat">{messages.length===0&&<p className="empty">Ask a question, or upload documents through the API.</p>}{messages.map((m,i)=><div key={i} className={`message ${m.role}`}><b>{m.role==="user"?"You":"Assistant"}</b><p>{m.text}</p></div>)}{busy&&<div className="message assistant">Thinking...</div>}</section><form onSubmit={send}><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Message your local assistant..." /><button>Send</button></form></main>}
createRoot(document.getElementById("root")).render(<App/>);
