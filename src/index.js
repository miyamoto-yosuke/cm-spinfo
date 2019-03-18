// TODO: add update,insert
var React = require('react');
var ReactDOM = require('react-dom');

// // cm_aclg一覧レンダリング用コンポーネント
// class CmAclgList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cm_aclgs: [],
//       testValue: "",
//     };

//     this.loadCmAclgList = this.loadCmAclgList.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState({
//       testValue: e.target.value
//     });
//   }

//   loadCmAclgList = () => {
//     return fetch("/_api/cm_aclgs/" + this.state.testValue)
//       .then((response) => response.json())
//       .then((responseJson) =>
//         this.setState({
//           cm_aclgs: responseJson.cm_aclgs,
//         })
//       )
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   // componentWillMount() {
//   //   this.loadCmAclgList();
//   // }

//   render() {
//     const cm_aclg_list = this.state.cm_aclgs.map((cm_aclg) =>
//       <tr key={`CmAclgList-${cm_aclg.noactv}`}>
//         <td>{cm_aclg.al_idactv}</td>
//         <td>{cm_aclg.al_nmactv}</td>
//         <td>{cm_aclg.al_noactv}</td>
//         <td>{cm_aclg.al_cdsqsk}</td>
//         <td>{cm_aclg.al_nmsqsk}</td>
//       </tr>
//     );

//     return(
//       <div>
//         <form onSubmit={this.loadCmAclgList}>
//           <input type="text" placehosder="search" value={this.state.testValue} onChange={this.handleChange} />
//           <button type="submit">
//             送信！!!!
//           </button>
//         </form>
//         <table>
//           <thead>
//             <tr>
//               <th>al_idactv</th>
//               <th>al_nmactv</th>
//               <th>al_noactv</th>
//               <th>al_cdsqsk</th>
//               <th>al_nmsqsk</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cm_aclg_list}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// const List = () => {
//   return (
//     <div>
//       <ul>
//         {[5,0,9,1, 2, 3].map(num => <li key={num}>{num}</li>)}
//       </ul>
//     </div>
//   )
// }

// class Test extends React.Component (props) {
//   constructor(props) {
//     super(props)
//     this.state = {
//       cm_aclgs: [],
//     }
//   }

//   fetchapi = () => {
//     fetch("/_api/cm_aclgs/" + this.state.props.cdsqsk)
//     // fetch("/_api/cm_aclgs/20925836")
//     .then(res => res.json())
//     .then(resJson => this.setState({
//         cm_aclgs: resJson.cm_aclgs,
//       })
//     )
//     .catch((error) => {
//       console.error(error);
//     })
//   }

//   render() {
//     const cm_aclg_list = this.state.cm_aclgs.map((cm_aclg) =>
//       <tr key={`CmAclgList-${cm_aclg.noactv}`}>
//         <td>{cm_aclg.al_idactv}</td>
//         <td>{cm_aclg.al_nmactv}</td>
//         <td>{cm_aclg.al_noactv}</td>
//         <td>{cm_aclg.al_cdsqsk}</td>
//         <td>{cm_aclg.al_nmsqsk}</td>
//       </tr>
//     );

//     return(
//       <div>
//         {/* <form onSubmit={() => this.fetchapi}> */}
//         <form>
//           <input type="text" placehosder="search" value={this.state.testValue} onChange={this.fetchapi} />
//           {/* <input type="text" placehosder="search" value={this.state.testValue} /> <button type="submit">
//             送信！!!!
//           </button> */}
//         </form>
//         <table>
//           <thead>
//             <tr>
//               <th>al_idactv</th>
//               <th>al_nmactv</th>
//               <th>al_noactv</th>
//               <th>al_cdsqsk</th>
//               <th>al_nmsqsk</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cm_aclg_list}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }


// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       tasks: [
//       // { title: 'Todo1つ目', id: 0 },
//       ],
//       uniqueId: 1,
//       cm_aclgs: [],
//     }
//   }

  // addTodo = (title) => {
  //   const {
  //     tasks,
  //     uniqueId,
  //   } = this.state

  //   const task = {
  //     title,
  //     id: uniqueId,
  //   }

  //   const newTasks = [...tasks, task]
  //   this.setState({
  //     tasks: newTasks,
  //   })
  // }

  // resetTodo = () => {
//   resetTodo = () => {
//     this.setState({
//       tasks: [],
//       cm_aclgs: [],
//     })
//   }

//   fetchList = (cdsqsk) => {
//     fetch("/_api/cm_aclgs/" + cdsqsk)
//     // fetch("/_api/cm_aclgs/20925836")
//     .then(res => res.json())
//     .then(resJson => this.setState({
//         cm_aclgs: resJson.cm_aclgs,
//       })
//     )
//     .catch((error) => {
//       console.error(error);
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>書籍購入・セミナー・大会参加者リスト</h1>
//         <button onClick={this.resetTodo} >リセット</button>
//         {/* <TodoInput addTodo={this.addTodo} /> */}
//         <TodoInput fecthList={this.fetchList} />
//         <TodoList tasks={this.state.tasks} />
//         <TodoList tasks={this.state.tasks} />
//       </div>
//     )
//   }
// }

// class TodoInput extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       inputValue: '',
//     }
//   }
//   handleChange = (e) => {
//     this.setState({
//       inputValue: e.target.value,
//     })
//   }
//   handleClick = (e) => {
//     e.preventDefault()
//     const inputValue = this.state.inputValue
//     // this.props.addTodo(inputValue)
//     this.props.fetchList(inputValue)
//   }
//   render() {
//     return (
//       <div>
//         <input placeholder="読者番号を入力してください" value={this.state.inputValue} onChange={this.handleChange} />
//         <button onClick={this.handleClick} >登録</button>
//         <a href="/register" onClick={this.handleClick} >登録</a>
//       </div>
//     )
//   }
// }

// class TodoList extends React.Component {
//   render() {
//     const list = this.props.tasks.map(todo => {
//       return <TodoItem {...todo} key={todo.id} />
//     })
//     return (
//       <div>
//         <ul>
//           {list}
//         </ul>
//       </div>
//     )
//   }
// }

// function TodoItem(props) {
//   return (
//     <li>
//       {props.title}
//     </li>
//   )
// }
class App3 extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      cm_mdmms: [],
      searchKey: [],
    }
  }

   componentWillMount(){
     this.fetchResponse(this.state.searchKey)
   }

  fetchResponse= (searchkey) => {
    // fetch("/_api/cm_mdmms/" + this.state.props.cdsqsk)
    fetch("/_api/cm_mdmms/" + searchkey)
    //fetch("/_api/cm_mdmms/22222222")
    // fetch("/_api/cm_mdmms/20925836")
    .then(res => res.json())
    .then(resJson => this.setState({
        cm_mdmms: resJson.cm_mdmms,
      })
    )
    .catch((error) => {
      console.error(error);
    })
  }

  handleChange = (e) => {
    this.setState({
      searchKey: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <h2>お客様窓口メモ</h2>
        <form>
          <input type="text" placehosder="読者番号を入力してください" value={this.state.searchKey} onChange={this.handleChange}/>
          <input type="button" onClick={() => this.fetchResponse(this.state.searchKey)} value="検索" />
        </form>
        <ul>
          <li>
            <p>md_fganch</p>
            <p>md_cdcstm</p>
            <p>md_nommrb</p>
            <p>md_nmmmbr</p>
            <p>md_txmdmm</p>
          </li>
          {this.state.cm_mdmms.map( cm_mdmm => (
            <li key={cm_mdmm.md_idmdmm}>
              <p>{cm_mdmm.md_fganch}</p>
              <p>{cm_mdmm.md_cdcstm}</p>
              <p>{cm_mdmm.md_nommrb}</p>
              <p>{cm_mdmm.md_nmmmbr}</p>
              <p>{cm_mdmm.md_txmdmm}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}


class App2 extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      cm_aclgs: [],
      searchKey: [],
    }
  }

   componentWillMount(){
     this.fetchResponse(this.state.searchKey)
   }

  fetchResponse= (searchkey) => {
    // fetch("/_api/cm_aclgs/" + this.state.props.cdsqsk)
    fetch("/_api/cm_aclgs/" + searchkey)
    // fetch("/_api/cm_aclgs/20925836")
    .then(res => res.json())
    .then(resJson => this.setState({
        cm_aclgs: resJson.cm_aclgs,
      })
    )
    .catch((error) => {
      console.error(error);
    })
  }

  handleChange = (e) => {
    this.setState({
      searchKey: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <h2>書籍購入・セミナー・大会参加履歴</h2>
        <form>
          <input type="text" placehosder="読者番号を入力してください" value={this.state.searchKey} onChange={this.handleChange}/>
          <input type="button" onClick={() => this.fetchResponse(this.state.searchKey)} value="検索" />
        </form>
        <ul>
          <li>
            <p>al_idactv</p>
            <p>al_nmactv</p>
            <p>al_noactv</p>
            <p>al_cdsqsk</p>
            <p>al_nmsqsk</p>
          </li>
          {this.state.cm_aclgs.map( cm_aclg => (
            <li key={cm_aclg.al_noactv}>
              <p>{cm_aclg.al_idactv}</p>
              <p>{cm_aclg.al_nmactv}</p>
              <p>{cm_aclg.al_noactv}</p>
              <p>{cm_aclg.al_cdsqsk}</p>
              <p>{cm_aclg.al_nmsqsk}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };

    this.addTodo = this.addTodo.bind(this);
  }

  // 初期値の設定
  componentWillMount(){
    this.fetchResponse();
  }

  // リストの更新
  fetchResponse(){
    fetch('http://localhost:3003/todos')
    .then( res => res.json() )
    .then( res => {
      this.setState({
        todo : res
      });
    })
  }

  // 新規追加
  addTodo() {
    fetch('http://localhost:3003/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: this.refs.newText1.value,
        name: this.refs.newText2.value
      }),
      headers: new Headers({ 'Content-type' : 'application/json' })
    }).then( () => {
      // リストの更新
      this.fetchResponse();
      // 値の初期化
      this.refs.newText1.value = "";
      this.refs.newText2.value = "";
    })
  }

  // 編集機能
  updateTodo(todo) {
    fetch(`http://localhost:3003/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: todo.id,
        title: todo.title,
        name: todo.name
      }),
      headers: new Headers({ 'Content-type' : 'application/json' })
    })
  }

  // 削除機能
  deleteTodo(todo) {
    fetch(`http://localhost:3003/todos/${todo.id}`, {
      method: 'DELETE'
    }).then( () => {
      const todos = this.state.todo.filter(item => item.id !== todo.id)
      // 保存
      this.setState({
        todo : todos
      });
    })
  }

  render() {
    return (
      <div>
        <h2>お客様メモ</h2>
        <ul>
          {this.state.todo.map( todo => (
            <li key={todo.id}>
              <input type="text"
                defaultValue={todo.title}
                onChange={e => todo.title = e.target.value}
              />
              <input type="text"
                defaultValue={todo.name}
                onChange={e => todo.name = e.target.value}
              />
              <input type="button" value="編集" onClick={() => this.updateTodo(todo)}/>
              <input type="button" value="削除" onClick={() => this.deleteTodo(todo)}/>
            </li>
          ))}
        </ul>
        <input type="text" ref="newText1"/>
        <input type="text" ref="newText2"/>
        <input type="button" value="追加" onClick={this.addTodo}/>
      </div>
    );
  }
}

ReactDOM.render(
  <>
    <h1>お客様履歴一覧</h1>
    <App />
    <App3 />
    <App2 />
  </>
  , document.getElementById('root')
);
