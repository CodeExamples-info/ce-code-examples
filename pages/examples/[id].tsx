import Head from 'next/head';
import { Fragment } from 'react';
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
        '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p>',
      author: {
        name: 'Harsh Patel',
        slug: 'harsh-patel',
        profilePage:
          'https://res.cloudinary.com/codeexamples-info/image/upload/c_fill,g_center,h_52,w_52/v1638986192/brandmark-design_xnaz6c.jpg',
        positionName: 'Creator of the website',
      },
      createdDate: '2021-12-23T04:00:00Z',
      updatedDate: '2020-05-24T04:00:00Z',
      steps: [
        {
          id: '1',
          code: `import Head from 'next/head';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark as darkCodeHighlightTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';`,
        },
        {
          id: '2',
          code: `export function Example() {}`,
          title: 'Creating a React Component',
          description:
            '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p>',
        },
        {
          id: '3',
          code: `export function Example() {}`,
          title: 'Creating a React Component',
          description:
            '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p>',
        },
        {
          id: '4',
          code: `export function Example() {}`,
          title: 'Creating a React Component',
          description:
            '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p>',
        },
        {
          id: '5',
          code: `export function Example() {}`,
          title: 'Creating a React Component',
          description:
            '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p>',
        },
      ],
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
          {props.steps.map((step: any) => (
            <div tabIndex={0} className="hover:scale-110 focus:scale-110" key={step.id}>
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
                {step.code}
              </SyntaxHighlighter>
            </div>
          ))}
        </div>
        <div className="flex-1 flex-grow w-auto p-5 prose max-w-none prose-p:text-slate-900 prose-pre:bg-slate-800 overflow-y-scroll h-full">
          {/* <h1 className="text-4xl font-bold mb-2 leading-snug">{props.title}</h1> */}
          <h1>{props.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: props.description }}></div>

          {props.steps.map((step: any) => (
            <Fragment key={step.id}>
              {step.title ? <h2>{step.title}</h2> : ''}
              {step.description ? <div dangerouslySetInnerHTML={{ __html: step.description }}></div> : ''}
            </Fragment>
          ))}
        </div>
        {/* <div>
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
        </div> */}
      </div>
    </main>
  );
}
