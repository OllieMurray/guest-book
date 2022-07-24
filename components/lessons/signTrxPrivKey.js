import CodeSnippet from "../CodeSnippet";

const content = (
  <div>
    <h2>Sign Transaction With Private Key</h2>
    <p>
      Cryptosat can securely store private keys and use them to sign
      transactions. In this example we used a stored private key in the
      satellite to sign a text message that says "Hello World!"
    </p>
    <CodeSnippet code={`cryptosat.signTextTransaction2();`} />
    <p>
      Entering this code into the console will return the signed transaction
      which can then be submitted elsewhere as proof of verification.
    </p>
  </div>
);

export default content;
