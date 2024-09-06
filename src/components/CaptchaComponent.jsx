import React, { useState, useRef, useEffect } from "react";

const CaptchaComponent = ({ aprovecaptcha, setAprovecaptcha }) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const canvasRef = useRef(null);

  // Function to generate random CAPTCHA text
  const generateCaptchaText = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  // Function to draw CAPTCHA text on canvas
  const drawCaptcha = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear previous content
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background color
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw random lines for added difficulty
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Set text style
    ctx.font = "bold 30px Arial";
    ctx.fillStyle = "#000000";

    // Draw CAPTCHA text
    ctx.fillText(captchaText, 10, 35);
  };

  // Handle the input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Validate the CAPTCHA input
  const validateCaptcha = () => {
    if (userInput.toLowerCase === captchaText.toLowerCase) {
      alert("CAPTCHA validated!");
      setUserInput("")
      setAprovecaptcha(true)
    } else {
      alert("Incorrect CAPTCHA, please try again.");
    }
    // Reset the CAPTCHA
    const newCaptcha = generateCaptchaText();
    setCaptchaText(newCaptcha);
  };

  const refreshCaptcha = () => {
    const newCaptcha = generateCaptchaText();
    setCaptchaText(newCaptcha);
    setUserInput("");  // Clear the input field when refreshing the CAPTCHA
  };

  // Generate a new CAPTCHA and draw it when the component mounts
  useEffect(() => {
    const newCaptcha = generateCaptchaText();
    setCaptchaText(newCaptcha);
  }, []);

  // Redraw CAPTCHA every time the text changes
  useEffect(() => {
    drawCaptcha();
  }, [captchaText]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="200"
        height="50"
        style={{ border: "1px solid #ccc" }}
      ></canvas>
      <div className="flex sm:gap-2 mt-2">
        <input
          className="border-2 p-2 border-gray-500 "
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter CAPTCHA"
        />
        <button disabled={aprovecaptcha} className={`${!aprovecaptcha?"bg-blue-600":"bg-gray-400" } px-6 py-2 text-white `} onClick={validateCaptcha}>Verificar</button>
      </div>
      <button className=" bg-blue-600 px-6 py-2 text-white mt-2 w-full" onClick={refreshCaptcha}>Actualizar la imagen</button>
      
    </div>
  );
};

export default CaptchaComponent;
