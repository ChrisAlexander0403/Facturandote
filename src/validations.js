
export const blockSpecialCaracters = (e) => {
    let regex = new RegExp("^[a-zA-Z0-9]+$");
    let key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(key)) {
    e.preventDefault();
        return false;
    }
}

export const allowLettersOnly = (e) => {
    const regex = new RegExp("^[a-zA-ZÁ-ÿ-'\u00f1\u00d1 ]+$");
    let key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(key)) {
    e.preventDefault();
        return false;
    }
}

export const allowEmailCharacters = (e) => {
    const regex = new RegExp("^[0-9a-zA-ZÁ-ÿ\u00f1\u00d1@._-]+$");
    let key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(key)) {
        e.preventDefault();
        return false;
    }
}

export const limitPhone = e => {
    if (e.target.value.length > 10) {
        e.target.value = e.target.value.slice(0,10); 
    }    
}

export const formatInput = (e) => {
    let checkIfNum;
    if (e.key !== undefined) {
      checkIfNum = e.key === "e" || e.key === "." || e.key === "+" || e.key === "-" ;
    }
    else if (e.keyCode !== undefined) {
      checkIfNum = e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 187 || e.keyCode === 189;
    }
    return checkIfNum && e.preventDefault();
}