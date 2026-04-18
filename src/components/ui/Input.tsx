export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    console.log("INPUT RENDERED");
    return <input {...props} style={{ background: "red", color: "white", padding: 12 }} />;
  }