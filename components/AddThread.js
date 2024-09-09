const AddThread = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await fetch('/api/threads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
      });
      if (res.ok) {
        // Handle success
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Thread Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Thread Content"
        />
        <button type="submit">Create Thread</button>
      </form>
    );
  };
  
  export default AddThread;
  