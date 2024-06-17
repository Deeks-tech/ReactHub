export default function DumbBtn({ children, onClick, onChange }) {
  return (
    <button onClick={onClick} onChange={onChange}>
      {children}
    </button>
  );
}
