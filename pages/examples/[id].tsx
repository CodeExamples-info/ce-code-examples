import Head from 'next/head';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
}

export function getStaticProps() {
  return {
    props: {
      id: 'jibrishID',
      slug: 'Implement-Google-OAuth0-with-Passport-JS',
      title: 'Implement Google OAuth with Passport JS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?',
      author: {
        name: 'Harsh Patel',
        slug: 'harsh-patel',
        profilePage:
          'https://res.cloudinary.com/codeexamples-info/image/upload/c_fill,g_center,h_52,w_52/v1638986192/brandmark-design_xnaz6c.jpg',
        positionName: 'Creator of the website',
      },
      createdDate: '2021-12-23T04:00:00Z',
      updatedDate: '2020-05-24T04:00:00Z',
    },
  };
}

export default function Example(props: any) {
  return (
    <main className="w-full h-full">
      <div className="flex items-start h-full w-full">
        <Head>
          <title>{props.title}</title>
          <meta name="description" content={props.description} />
        </Head>

        <div className="flex-1 max-w-2xl p-5 text-white bg-slate-800 h-full">
          <div tabIndex={0} className="hover:scale-110 focus:scale-110">
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
          <div tabIndex={0} className="hover:scale-110 focus:scale-110">
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
          <div tabIndex={0} className="hover:scale-110 focus:scale-110">
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
        <div className="flex-1 flex-grow w-auto p-5">
          <h1 className="text-4xl font-bold mb-2 leading-snug">{props.title}</h1>

          <div>
            <div>
              <pre>The complete Code for the example</pre>
              <article>The step by step guide for the code</article>
            </div>
          </div>

          <div>
            Side action bar (button changes the content in the description place)
            <p>
              Buttons
              <p>Author with the avatar</p>
              <p>document Icon for description</p>
              <p>Q&A button</p>
              <p>Errors</p>
              <p>Comments</p>
              <p>Like, Share etc buttons with total number</p>
            </p>
            <div>The SPECIAL section of all other related components</div>
          </div>
        </div>
      </div>
    </main>
  );
}
