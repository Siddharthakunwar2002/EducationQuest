import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { FaCopy, FaCheck } from 'react-icons/fa'

const CodeBlock = ({ code, language, showLineNumbers = true }) => {
  const [copied, setCopied] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="my-6 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-2">
        <div className="flex items-center">
          <span className="text-sm font-mono mr-2">{language}</span>
          <button 
            onClick={toggleTheme} 
            className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
        >
          {copied ? (
            <>
              <FaCheck className="mr-1" /> Copied!
            </>
          ) : (
            <>
              <FaCopy className="mr-1" /> Copy
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={isDarkMode ? vs2015 : docco}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.9rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock