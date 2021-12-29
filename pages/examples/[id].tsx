import Head from 'next/head';
import { createRef, RefObject, useRef } from 'react';
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
            '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p>',
        },
      ],
    },
  };
}

// TODO: add types for props
export default function Example(props: any) {
  // Review the scroll code again to check if we can improve it
  const elRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  if (elRefs.current.length !== props.steps.length) {
    // add or remove refs
    elRefs.current = Array(props.steps.length)
      .fill(null)
      .map((_) => createRef());
  }

  function scrollToDescription(index: number) {
    console.log(elRefs.current);

    // const offset = elRefs.current[index].current?.offsetTop || 0;
    console.log({ index });
    console.log(elRefs.current[index].current);
    // containerRef.current?.scrollTo({
    //   top: offset - 100,
    //   left: 0,
    //   behavior: 'smooth',
    // });
    if (elRefs.current[index].current) {
      elRefs.current[index].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      containerRef.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  return (
    <main className="w-full h-full">
      <div className="h-full w-full grid grid-flow-col">
        <Head>
          <title>{props.title}</title>
          <meta name="description" content={props.description} />
        </Head>

        <div className="max-w-2xl p-5 text-white bg-slate-800 h-full overflow-y-auto">
          {props.steps.map((step: any, index: number) => (
            <div
              tabIndex={0}
              className="border-transparent border-2 hover:border-slate-700 hover:bg-slate-700 hover:shadow-inner hover:shadow-slate-700 hover:scale-[1.02] rounded mb-2 transition-all cursor-pointer active:cursor-text"
              key={step.id}
            >
              <SyntaxHighlighter
                language="javascript"
                style={nightOwl}
                // showLineNumbers={true}
                // wrapLines={true}
                wrapLongLines={true}
                customStyle={{
                  background: 'transparent',
                }}
                onClick={() => scrollToDescription(index)}
              >
                {step.code}
              </SyntaxHighlighter>
            </div>
          ))}
        </div>
        <div
          className="w-auto p-5 prose prose-p:text-slate-900 prose-pre:bg-slate-800 h-full overflow-y-auto max-w-none"
          ref={containerRef}
        >
          {/* <h1 className="text-4xl font-bold mb-2 leading-snug">{props.title}</h1> */}
          <h1>{props.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: props.description }}></div>

          {props.steps.map((step: any, index: number) => (
            <div
              id={`block-${step.id}`}
              key={step.id}
              ref={step.title && step.description ? elRefs.current[index] : null}
              className="scroll-m-8"
            >
              {step.title ? <h3>{step.title}</h3> : ''}
              {step.description ? <div dangerouslySetInnerHTML={{ __html: step.description }}></div> : ''}
            </div>
          ))}
        </div>
        {/* <div>
          
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
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
