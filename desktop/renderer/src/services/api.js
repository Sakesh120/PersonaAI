const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";
async function request(path, options) {
  const response = await fetch(`${API_URL}${path}`, options);
  if (!response.ok) throw new Error((await response.json()).error || `Request failed: ${response.status}`);
  return response.status === 204 ? null : response.json();
}
export const api = {
  chat: (message, conversationId = "default") => request("/chat", { method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify({message,conversationId}) }),
  documents: () => request("/documents"),
  searchDocuments: query => request("/documents/search", { method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify({query}) }),
  health: () => request("/health")
};
