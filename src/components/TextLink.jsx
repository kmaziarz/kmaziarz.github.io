export default function TextLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-200 hover:underline"
    >
      {children}
    </a>
  );
}