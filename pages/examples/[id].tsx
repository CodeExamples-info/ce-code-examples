import Head from 'next/head';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Example() {
  return (
    <div className="flex items-start h-full w-full">
      <Head>
        <title>Title of the example</title>
        <meta name="description" content="A very short description of the example. (a separate field in example)" />
      </Head>

      <div className="w-1/2 max-w-2xl p-5 text-white bg-slate-800 h-full">
        <div className="hover:scale-110">
          <SyntaxHighlighter
            language="javascript"
            style={nightOwl}
            // showLineNumbers={true}
            // wrapLines={true}
            wrapLongLines={true}
            customStyle={{
              background: 'transparent',
            }}
          >
            {`import Head from 'next/head';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark as darkCodeHighlightTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';`}
          </SyntaxHighlighter>
        </div>
        <div className="hover:scale-110">
          <SyntaxHighlighter
            language="javascript"
            style={nightOwl}
            // showLineNumbers={true}
            // wrapLines={true}
            wrapLongLines={true}
            customStyle={{
              background: 'transparent',
            }}
          >
            {`export function Example() {}`}
          </SyntaxHighlighter>
        </div>
        <div className="hover:scale-110">
          <SyntaxHighlighter
            language="javascript"
            style={nightOwl}
            // showLineNumbers={true}
            // wrapLines={true}
            wrapLongLines={true}
            customStyle={{
              background: 'transparent',
            }}
          >
            {`export default Example;`}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-4xl font-bold">Example Title in the Massive font size</h1>
        <p>Created Date in human readable format</p>
        <p>Last Published Date in human readable format</p>
        <p>Author with the avatar</p>

        <div>
          <div>
            <pre>The complete Code for the example</pre>
            <article>The step by step guide for the code</article>
          </div>
        </div>

        <div>The SPECIAL section of all other related components</div>
      </div>
    </div>
  );
}
