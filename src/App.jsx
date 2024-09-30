import React, { useState } from 'react';
import './App.css';

function App() {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [loremText, setLoremText] = useState([]);

  // Sample lorem ipsum paragraphs (each with 40 words)
  const loremData = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium lectus at fringilla cursus. Integer vel tortor metus. Suspendisse tincidunt libero vel neque hendrerit, ac egestas magna vestibulum. Donec convallis magna in purus dapibus.",
    "Phasellus lacinia libero a massa venenatis, ac efficitur risus fermentum. Integer viverra massa at enim aliquet, non aliquam erat laoreet. Aliquam erat volutpat. Praesent ac tellus est. Pellentesque quis hendrerit turpis. Fusce eget magna nec eros.",
    "Vivamus hendrerit lectus vitae lectus dictum facilisis. Nam bibendum libero sit amet sem egestas gravida. Sed tempus dolor sit amet ante aliquet aliquam. Cras posuere, erat in faucibus malesuada, nulla nunc vehicula nunc, a condimentum arcu.",
    "In convallis mauris eu sapien mollis, vel scelerisque lectus vestibulum. Mauris lacinia tortor sit amet nisi sollicitudin pellentesque. Sed ac dolor nec felis ullamcorper vehicula. Duis vulputate tortor ut ipsum condimentum, eget facilisis felis condimentum.",
    "Etiam vulputate felis nec velit gravida sollicitudin. Morbi quis enim in arcu tincidunt viverra. Nulla sodales lorem neque, ac hendrerit justo vehicula non. Suspendisse et dui quis nulla convallis dignissim non id metus. Praesent commodo enim ut.",
    "Sed ultrices velit eu dui tincidunt consequat. Cras malesuada libero ac ex porttitor, sed luctus orci ultricies. Aliquam erat volutpat. Duis ultricies tristique felis, sed ultrices lacus egestas sit amet. Pellentesque habitant morbi tristique senectus.",
    "Curabitur vel augue sit amet urna elementum commodo. Donec convallis venenatis arcu, et lacinia libero posuere nec. Sed accumsan lectus non justo interdum fermentum. Integer nec mi non lacus blandit laoreet nec sed orci. Sed feugiat felis quis.",
    "Suspendisse ut felis ultricies, hendrerit nulla id, tempus arcu. Nulla eget libero nulla. Ut pulvinar venenatis nulla, ac vehicula turpis volutpat sit amet. Quisque volutpat felis quis urna laoreet suscipit. Nam id magna magna. Integer rhoncus vel.",
    "Morbi tristique viverra metus, vel luctus elit ornare nec. Nam sodales risus at sapien fringilla, quis suscipit felis rutrum. Cras venenatis justo eget turpis gravida, a aliquam elit vestibulum. In dapibus erat et quam bibendum, at convallis nisl.",
    "Maecenas quis tortor ornare, tincidunt orci ut, suscipit sem. Nulla nec felis nec tortor pretium fermentum. Mauris posuere mauris ut purus cursus, et efficitur tortor ullamcorper. Nullam consequat purus eu augue condimentum, sit amet tincidunt ligula.",
    "Ut elementum leo id magna vulputate, sed posuere risus dignissim. Integer non dolor lectus. Phasellus sodales scelerisque felis, et viverra metus venenatis a. Sed vel mi lacinia, sodales justo sit amet, suscipit erat. Ut dignissim velit id metus.",
    "Donec fermentum elit sit amet justo cursus, ac convallis felis pellentesque. Sed vitae sapien in justo suscipit tincidunt. Integer ac justo dictum, dapibus felis vel, dignissim libero. Curabitur varius justo vitae felis vulputate consectetur et vel.",
    "Fusce pharetra neque a orci mollis, non elementum nulla gravida. Donec venenatis eros in arcu aliquet, vel porttitor mi accumsan. Curabitur placerat sapien sed nisl eleifend, sit amet pharetra dui viverra. Vivamus rutrum nibh id velit feugiat, et.",
    "Aliquam quis libero ut mi iaculis efficitur. Suspendisse dignissim eros at nisi vulputate, eget mollis orci laoreet. Integer ac scelerisque turpis. Cras at orci ut erat consequat efficitur. Integer aliquet enim vitae orci facilisis, ut ullamcorper.",
    "Vestibulum mollis, felis a dignissim eleifend, nulla ex tincidunt dolor, sit amet aliquam nulla nulla ut tortor. Integer fermentum suscipit justo, sit amet tristique nisi bibendum sed. Phasellus vestibulum ligula nec dui vehicula, id dapibus nulla."
  ];

  const generateLorem = () => {
    if (numParagraphs < 1 || numParagraphs > 15) {
      alert("Please enter a number between 1 and 15.");
      return;
    }

    // Generate paragraphs based on user input (with max 15 paragraphs)
    const paragraphs = loremData.slice(0, Math.min(numParagraphs, 15));
    setLoremText(paragraphs);
  };

  return (
    <div className="container">
      <h1 className="title">Lorem Ipsum Generator</h1>

      <div className="form">
        <label htmlFor="paragraphs">Number of Paragraphs (1 to 15): </label>
        <input
          type="number"
          id="paragraphs"
          value={numParagraphs}
          onChange={(e) => setNumParagraphs(e.target.value)}
          min="1"
          max="15"
          className="input-field"
        />
        <button onClick={generateLorem} className="generate-btn">
          Generate
        </button>
      </div>

      <div className="output">
        {loremText.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
