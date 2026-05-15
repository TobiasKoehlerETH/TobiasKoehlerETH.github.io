import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 text-gray-900">
      <div className="max-w-md text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          404
        </p>
        <h1 className="mb-4 text-3xl font-bold">Page not found</h1>
        <p className="mb-6 text-gray-600">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
        >
          Back to CV
        </Link>
      </div>
    </main>
  )
}
