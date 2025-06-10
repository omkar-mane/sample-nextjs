import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 p-4"> {/* Removed text-white here */}
      <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-8 max-w-2xl text-center backdrop-blur-md text-gray-800"> {/* Added text-gray-800 for black text */}
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          🚀 <span className="block mt-2">External CI/CD Demo Page</span> 🚀
        </h1>
        <p className="text-2xl mb-6 font-light">
          This sleek Next.js application is deployed with flair directly from GitHub!
        </p>
        <p className="text-lg mb-8 opacity-90">
          Experience seamless integration and rapid deployment, showcasing the power of an external
          Continuous Integration and Continuous Delivery pipeline. No fuss, just pure automation magic.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/omkar-mane/sample-nextjs" // Replace with your actual GitHub repo link
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.828.092-.643.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.931 0-1.09.39-1.984 1.029-2.68-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.7.11 2.493.324 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.099 2.65.64.696 1.028 1.59 1.028 2.68 0 3.829-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.33-.012 2.41-.012 2.746 0 .267.18.577.688.483C21.137 20.218 24 16.447 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
          {/* Optional: Add another button for a live demo or more info */}
          <a
            href="https://nextjs.org/docs" // Replace with a relevant link, e.g., your project's docs or another live demo
            className="inline-flex items-center px-6 py-3 rounded-full bg-transparent border-2 border-gray-800 text-gray-800 font-semibold text-lg shadow-lg hover:bg-gray-800 hover:text-white transition duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More About Next.js
          </a>
        </div>
      </div>
    </div>
  );
}
