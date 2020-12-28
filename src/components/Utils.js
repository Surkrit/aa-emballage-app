import namor from "namor";
import React from "react";

import Comment from "./Comment";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  // Her bliver kommentaren produceret. Det er ligeledes også her, hvor det bliver muligt at redigere live clientsite
  class Kommentaren extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comment: namor.generate({
          words: 4,
          saltLength: 0,
          separator: " ",
          subset: "manly",
        }),
      };
    }
    // myChangeHandler går ind og sætter tilstanden på "comment"
    myChangeHandler = (event) => {
      this.setState({ comment: event.target.value });
    };
    render() {
      return (
        <div className="comment-wrapper">
          <Comment title="Indsæt">
            <textarea
              className="comment"
              onChange={this.myChangeHandler}
            >
              {this.state.comment}
            </textarea>
          </Comment>
          <h4>{this.state.comment}</h4>
        </div>
      );
    }
  }

  const dato =
    Math.floor(Math.random() * (1, 30) + 1) +
    "-" +
    Math.floor(Math.random() * (1, 12) + 1) +
    "-20" +
    Math.floor(Math.random() * (1, 11) + 10);
  const checkbox = <input type="checkbox" />;
  const checkbox1 = <input type="checkbox" checked />;
  const checkboxAccep = Math.random();
  const checkboxAA = Math.random();
  const checkboxSigned = Math.random();
  const kommentar = <Kommentaren />;
  const number = Math.random();
  const number2 = Math.random();
  const number3 = Math.random();
  const number4 = Math.random();
  const number5 = Math.random();
  const number6 = Math.random();
  const number7 = Math.random();
  const number8 = Math.random();
  const number9 = Math.random();
  const number10 = Math.random();
  const number11 = Math.random();
  const number12 = Math.random();
  const number13 = Math.random();
  const number14 = Math.random();

  return {
    id: Math.floor(Math.random() * 9999),
    accepAA: checkboxAA > 0.5 ? checkbox : checkbox1,
    accepKunde: checkboxAccep > 0.5 ? checkbox : checkbox1,
    KvitteringNr: Math.floor(Math.random() * 999999),
    turNr: Math.floor(Math.random() * 99999),
    dato: dato,
    t5RFIDcc: number > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    hylder: number2 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    forlaenger: number3 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    RFIDcc: number4 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    halvRFIDcc: number5 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    halvHylde: number6 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    halvCC: number7 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    dsHalvCC: number8 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    dsHalvHylde: number9 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    europalle: number10 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    halvPalle: number11 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    kvartPalle: number12 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    cc: number13 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    soejleroer: number14 > 0.5 ? Math.floor(Math.random() * 100) + 1 : "",
    signeret: checkboxSigned > 0.5 ? checkbox : checkbox1,
    kommentar: kommentar,
    pdf: <i class="fas fa-file-download"></i>,
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
