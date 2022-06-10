let fields = [...document.querySelectorAll(".field")];

const setFiledState = (arr, field, color, type) => {
    let fieldState = arr.find((fState) => fState.field === field);
    fieldState.piece = { color: color, type: type };
};

const setFiledSelect = (arr, field, selected) => {
    let fieldState = arr.find((fState) => fState.field === field);
    fieldState.selected = selected;
};

const isFieldSelected = (arr, field) => {
    let fieldState = arr.find((fState) => fState.field === field);
    return fieldState.selected;
};

const getSelectedField = (arr) => {
    let fieldState = arr.find((fState) => fState.selected);
    return fieldState;
};

const initBoardRow = (column, arr) => {
    for (let row = 1; row <= 8; row++) {
        arr.push({
            field: column + row,
            selected: false,
            piece: { color: null, type: null }
        });
    }
};

const initBoardState = () => {
    let bState = [];
    for (let columnCharNum = 65; columnCharNum < 65 + 8; columnCharNum++) {
        initBoardRow(String.fromCharCode(columnCharNum), bState);
    }
    setFiledState(bState, "A2", "W", "Pawn");
    setFiledState(bState, "B2", "W", "Pawn");
    setFiledState(bState, "C2", "W", "Pawn");
    setFiledState(bState, "D2", "W", "Pawn");
    setFiledState(bState, "E2", "W", "Pawn");
    setFiledState(bState, "F2", "W", "Pawn");
    setFiledState(bState, "G2", "W", "Pawn");
    setFiledState(bState, "H2", "W", "Pawn");

    setFiledState(bState, "A1", "W", "Rook");
    setFiledState(bState, "B1", "W", "Knight");
    setFiledState(bState, "C1", "W", "Bishop");
    setFiledState(bState, "D1", "W", "King");
    setFiledState(bState, "E1", "W", "Queen");
    setFiledState(bState, "F1", "W", "Bishop");
    setFiledState(bState, "G1", "W", "Knight");
    setFiledState(bState, "H1", "W", "Rook");

    setFiledState(bState, "A7", "B", "Pawn");
    setFiledState(bState, "B7", "B", "Pawn");
    setFiledState(bState, "C7", "B", "Pawn");
    setFiledState(bState, "D7", "B", "Pawn");
    setFiledState(bState, "E7", "B", "Pawn");
    setFiledState(bState, "F7", "B", "Pawn");
    setFiledState(bState, "G7", "B", "Pawn");
    setFiledState(bState, "H7", "B", "Pawn");

    setFiledState(bState, "A8", "B", "Rook");
    setFiledState(bState, "B8", "B", "Knight");
    setFiledState(bState, "C8", "B", "Bishop");
    setFiledState(bState, "D8", "B", "King");
    setFiledState(bState, "E8", "B", "Queen");
    setFiledState(bState, "F8", "B", "Bishop");
    setFiledState(bState, "G8", "B", "Knight");
    setFiledState(bState, "H8", "B", "Rook");

    return bState;
};

const refreshField = (fState, fieldsDom) => {
    let fieldDom = fieldsDom.find(
        (domObj) => domObj.id == "field" + fState.field
    );

    if (fState.selected) {
        fieldDom.style.borderWidth = 20;
        fieldDom.style.borderStyle = "solid";
        fieldDom.style.borderColor = "red";
    } else {
        fieldDom.style.borderStyle = "none";
    }

    if (fState.piece.color === null) {
        fieldDom.style.backgroundImage = null;
    } else {
        let pieceColor = fState.piece.color === "W" ? "White" : "Black";
        let fileName = "Pieces/" + pieceColor + fState.piece.type + ".png";
        fieldDom.style.backgroundImage = "url('" + fileName + "')";
    }
};

const refreshBoardState = (boardStateArr, fieldsDom) => {
    boardStateArr.forEach((fState) => {
        refreshField(fState, fieldsDom);
    });
};

const onFieldClick = (event) => {
    /*console.log("zz" + event.target);
    event.target.style.borderWidth = 20;
    event.target.style.borderStyle = "solid";
    event.target.style.borderColor = "red";
    // fh8.style.borderWidth = 20;
    // fh8.style.borderStyle = "solid";
    // fh8.style.borderColor = "red";
    event.target.style.backgroundImage = "url('Pieces/WhiteRook.png')";*/
    // debugger;
    let fieldId = event.target.id.replace("field", "");
    //debugger;
    let clickedField = boardState.find((field) => field.field == fieldId);
    let selectedField = getSelectedField(boardState);
    /*console.log("clicked" + clickedField);
    console.log("selected" + selectedField);*/
    if (selectedField === undefined) {
        // field select
        if (clickedField.piece.type === null) return;
        setFiledSelect(boardState, fieldId, true);
    } else {
        // move piece
        selectedField.selected = false;
        clickedField.piece = { ...selectedField.piece };
        selectedField.piece = { color: null, type: null };
    }

    refreshBoardState(boardState, fields);
};

fields.forEach((v, e) => {
    //console.log(v);
    v.addEventListener("click", onFieldClick);
    // v.OnClick = () => console.log("u");
});

let boardState = initBoardState();
refreshBoardState(boardState, fields);
