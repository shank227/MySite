import { Link } from "react-router-dom";

export default function FloatingButton() {
  return (
    <Link
      to="/admin/new"
      className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white text-3xl rounded-full flex items-center justify-center shadow-lg"
    >
      +
    </Link>
  );
}
