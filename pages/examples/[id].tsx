import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { ExampleCodeList } from '../../modules/examples/components/ExampleCodeList.component';
import { ExampleDescriptionList } from '../../modules/examples/components/ExampleDescriptionList.component';
import exampleStepsContext from '../../modules/examples/hooks/exampleSteps.context.hook';
import { IExampleStep } from '../../modules/examples/interfaces/example-step.interface';
import { ExamplePageLayout } from '../../modules/examples/layouts/ExamplePage.layout';

interface ExampleProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  createdDate: string;
  updatedDate: string;
  author: {
    name: string;
    username: string;
    profileUrl: string;
    position: string;
  };
  steps: IExampleStep[];
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
}

export function getStaticProps(): { props: ExampleProps } {
  return {
    props: {
      id: 'jibrishID',
      slug: 'Implement-Google-OAuth0-with-Passport-JS',
      title: 'Implement Google OAuth with Passport JS',
      description:
        '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p>',
      author: {
        name: 'Harsh Patel',
        username: 'harsh-patel',
        profileUrl:
          'https://res.cloudinary.com/codeexamples-info/image/upload/c_fill,g_center,h_52,w_52,x_0/v1638986192/brandmark-design_xnaz6c.jpg',
        position: 'Creator of the website',
      },
      createdDate: '2021-12-23T04:00:00Z',
      updatedDate: '2020-05-24T04:00:00Z',
      steps: [
        {
          id: '1',
          code: `import Head from 'next/head';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark as darkCodeHighlightTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';`,
          title: 'Importing libraries',
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
          title: 'Completing the example',
          description:
            '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita magni eius ex ipsum et fugit temporibus accusamus mollitia fuga maiores illum amet, excepturi architecto numquam eum blanditiis laboriosam laborum?</p><pre>test description code</pre><p>Some extra paragraph text</p>',
        },
      ],
    },
  };
}

// TODO: add types for props
function Example(props: ExampleProps) {
  // Providing steps to root component so that we can display them in sidebar
  const { setSteps } = useContext(exampleStepsContext);
  useEffect(() => {
    setSteps(props.steps);
  }, [props.steps, setSteps]);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="w-full h-full">
      <div className="h-full w-full grid grid-flow-col">
        <Head>
          <title>{props.title}</title>
          <meta name="description" content={props.description} />
          {/* TODO: Set image as well */}
          {/* TODO: Check if there is a library to achieve this */}
        </Head>

        <ExampleCodeList steps={props.steps} containerRef={containerRef} />

        {/* TODO: Check if we can use the approach of using tabs from Headless UI, we can toggle between different screens, like Description, author, comments, etc... */}
        <ExampleDescriptionList
          steps={props.steps}
          title={props.title}
          description={props.description}
          containerRef={containerRef}
        />

        <div className="w-16 flex flex-col items-center">
          <div>
            {/* TODO Use Headless UI to show modal and have a link to visit author's page? */}
            <Link href={`/authors/${props.author.username}`}>
              <a>
                <Image
                  src={props.author.profileUrl}
                  height={36}
                  width={36}
                  objectFit="cover"
                  alt={`Image of the Author: ${props.author.name}`}
                  className="rounded-full"
                  title={props.author.name}
                ></Image>
              </a>
            </Link>
          </div>
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

Example.getLayout = function getLayout(page: ReactElement) {
  return <ExamplePageLayout>{page}</ExamplePageLayout>;
};

export default Example;
