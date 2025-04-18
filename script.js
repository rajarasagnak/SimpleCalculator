body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #b4c6fc;
    font-family: Arial, sans-serif;
}

.calculator {
    background: rgb(124, 76, 244);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    width: 260px;
}

#display {
    width: 100%;
    padding: 5px;
    font-size: 24px;
    margin-bottom: 10px;
    text-align: right;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    padding: 15px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background: #977cfa;
    color: white;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #1c03a9;
}
