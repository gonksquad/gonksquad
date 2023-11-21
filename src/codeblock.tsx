import { CopyBlock, dracula } from "react-code-blocks";

type CodeBlockProps = {
  text: string;
  language: string;
  showLineNumbers: boolean;
};

function CodeBlock(props: CodeBlockProps) {
  return (
    <CopyBlock
      text={props.text}
      language={props.language}
      showLineNumbers={true}
      theme={dracula}
      wrapLongLines
    />
  );
}

export default CodeBlock;
