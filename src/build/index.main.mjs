// Automatically generated with Reach 0.1.10 (c934aa69)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c934aa69)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Requester(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Requester expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Requester expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const v64 = stdlib.protect(ctc0, interact.studentCode, 'for Requester\'s interact field studentCode');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v72, v73, v74], secs: v76, time: v75, didSend: v36, from: v71 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v71, v73, v64],
    evt_cnt: 1,
    funcNum: 1,
    lct: v75,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v73, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v80], secs: v82, time: v81, didSend: v46, from: v79 } = txn2;
      
      sim_r.txns.push({
        amt: v73,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v73,
        kind: 'from',
        to: v71,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v80], secs: v82, time: v81, didSend: v46, from: v79 } = txn2;
  ;
  ;
  return;
  
  
  
  
  };
export async function University(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for University expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for University expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  
  
  const v61 = stdlib.protect(ctc0, interact.deadline, 'for University\'s interact field deadline');
  const v63 = stdlib.protect(ctc0, interact.universityCode, 'for University\'s interact field universityCode');
  
  const txn1 = await (ctc.sendrecv({
    args: [v63, stdlib.checkedBigNumberify('./index.rsh:34:19:decimal', stdlib.UInt_max, '10'), v61],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v72, v73, v74], secs: v76, time: v75, didSend: v36, from: v71 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v72, v73, v74], secs: v76, time: v75, didSend: v36, from: v71 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v80], secs: v82, time: v81, didSend: v46, from: v79 } = txn2;
  ;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAEIJgIAAQAiNQAxGEEBGyhkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAASSMSRCM0ARJENARJIhJMNAISEUQpZEk1A4EgWzX/STUFFzX+gATVFRkUNP4WULA0/4gAxLEisgE0/7III7IQNANXACCyB7NCAFVIIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yRbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULCBoI0GiABxMQA0/hZQKUsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v74",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v74",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610769380380610769833981016040819052610022916101ec565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a161008f341560076100f4565b60408051808201825260006020808301828152338085528683015183015182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100ec926002929091019061011d565b5050506102b9565b816101195760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546101299061027e565b90600052602060002090601f01602090048101928261014b5760008555610191565b82601f1061016457805160ff1916838001178555610191565b82800160010185558215610191579182015b82811115610191578251825591602001919060010190610176565b5061019d9291506101a1565b5090565b5b8082111561019d57600081556001016101a2565b604051606081016001600160401b03811182821017156101e657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156101ff57600080fd5b604080519081016001600160401b038111828210171561022f57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f198301121561024857600080fd5b6102506101b6565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c9082168061029257607f821691505b602082108114156102b357634e487b7160e01b600052602260045260246000fd5b50919050565b6104a1806102c86000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b61004761009036600461034f565b6100b8565b3480156100a157600080fd5b506100aa610237565b604051610064929190610367565b6100c860016000541460096102d4565b6100e2813515806100db57506001548235145b600a6102d4565b6000808055600280546100f4906103c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103c4565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103f9565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a16101df8160200151341460086102d4565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561021c573d6000803e3d6000fd5b5060008080556001819055610233906002906102f9565b5050565b60006060600054600280805461024c906103c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610278906103c4565b80156102c55780601f1061029a576101008083540402835291602001916102c5565b820191906000526020600020905b8154815290600101906020018083116102a857829003601f168201915b50505050509050915091509091565b816102335760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610305906103c4565b6000825580601f10610315575050565b601f0160209004906000526020600020908101906103339190610336565b50565b5b8082111561034b5760008155600101610337565b5090565b60006040828403121561036157600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561039b5785810183015185820160600152820161037f565b818111156103ad576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103d857607f821691505b6020821081141561036157634e487b7160e01b600052602260045260246000fd5b60006040828403121561040b57600080fd5b6040516040810181811067ffffffffffffffff8211171561043c57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461045657600080fd5b8152602092830151928101929092525091905056fea2646970667358221220cf90cb5577da1a6e5b272f05b72bef1cbeee02f19f0c4811f806340cfe28f0f964736f6c634300080c0033`,
  BytecodeLen: 1897,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:51:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Requester": Requester,
  "University": University
  };
export const _APIs = {
  };
