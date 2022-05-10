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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    code: ctc1,
    name: ctc2,
    status: ctc3
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Address;
  
  
  const v77 = stdlib.protect(ctc0, interact.studentCode, 'for Requester\'s interact field studentCode');
  const v78 = stdlib.protect(ctc4, interact.transcript, 'for Requester\'s interact field transcript');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v85, v86, v87], secs: v89, time: v88, didSend: v36, from: v84 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v84, v86, v77, v78],
    evt_cnt: 2,
    funcNum: 1,
    lct: v88,
    onlyIf: true,
    out_tys: [ctc0, ctc4],
    pay: [v86, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v93, v94], secs: v96, time: v95, didSend: v47, from: v92 } = txn2;
      
      sim_r.txns.push({
        amt: v86,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v86,
        kind: 'from',
        to: v84,
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
    tys: [ctc6, ctc0, ctc0, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v93, v94], secs: v96, time: v95, didSend: v47, from: v92 } = txn2;
  ;
  ;
  stdlib.protect(ctc5, await interact.sendTranscript(v94), {
    at: './index.rsh:54:28:application',
    fs: ['at ./index.rsh:53:7:application call to [unknown function] (defined at: ./index.rsh:53:19:function exp)'],
    msg: 'sendTranscript',
    who: 'Requester'
    });
  
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    code: ctc1,
    name: ctc2,
    status: ctc3
    });
  const ctc5 = stdlib.T_Null;
  
  
  const v74 = stdlib.protect(ctc0, interact.deadline, 'for University\'s interact field deadline');
  const v75 = stdlib.protect(ctc0, interact.price, 'for University\'s interact field price');
  const v76 = stdlib.protect(ctc0, interact.universityCode, 'for University\'s interact field universityCode');
  
  const txn1 = await (ctc.sendrecv({
    args: [v76, v75, v74],
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
      
      
      const {data: [v85, v86, v87], secs: v89, time: v88, didSend: v36, from: v84 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v85, v86, v87], secs: v89, time: v88, didSend: v36, from: v84 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v93, v94], secs: v96, time: v95, didSend: v47, from: v92 } = txn2;
  ;
  ;
  stdlib.protect(ctc5, await interact.sendTranscript(v94), {
    at: './index.rsh:54:28:application',
    fs: ['at ./index.rsh:53:7:application call to [unknown function] (defined at: ./index.rsh:53:19:function exp)'],
    msg: 'sendTranscript',
    who: 'University'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAEIJgIAAQAiNQAxGEEBJShkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAUyMSRCM0ARJENARJIhJMNAISEUQpZEk1A4EgWzX/STUFSSJbNf5XCCk1/YAEkj/iEjT+FlA0/VCwNP+IAMSxIrIBNP+yCCOyEDQDVwAgsgezQgBVSCI0ARJENARJIhJMNAISEURJNQVJSSJbNf8kWzX+gRBbNf2ABPdxE000/xZQNP4WUDT9FlCwgaCNBogAcTEANP4WUClLAVcAKGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v87",
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
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v87",
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
                "name": "v93",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes10",
                        "name": "elem0",
                        "type": "bytes10"
                      }
                    ],
                    "internalType": "struct T3",
                    "name": "_code",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes30",
                        "name": "elem0",
                        "type": "bytes30"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_name",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T5",
                "name": "v94",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
                "name": "v93",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes10",
                        "name": "elem0",
                        "type": "bytes10"
                      }
                    ],
                    "internalType": "struct T3",
                    "name": "_code",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes30",
                        "name": "elem0",
                        "type": "bytes30"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_name",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T5",
                "name": "v94",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
  Bytecode: `0x60806040526040516107e73803806107e7833981016040819052610022916101ec565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a161008f341560076100f4565b60408051808201825260006020808301828152338085528683015183015182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100ec926002929091019061011d565b5050506102b9565b816101195760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546101299061027e565b90600052602060002090601f01602090048101928261014b5760008555610191565b82601f1061016457805160ff1916838001178555610191565b82800160010185558215610191579182015b82811115610191578251825591602001919060010190610176565b5061019d9291506101a1565b5090565b5b8082111561019d57600081556001016101a2565b604051606081016001600160401b03811182821017156101e657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156101ff57600080fd5b604080519081016001600160401b038111828210171561022f57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f198301121561024857600080fd5b6102506101b6565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c9082168061029257607f821691505b602082108114156102b357634e487b7160e01b600052602260045260246000fd5b50919050565b61051f806102c86000396000f3fe6080604052600436106100405760003560e01c80631e93b0f11461004957806358bfe6a71461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b366004610341565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610229565b604051610064929190610359565b6100c860016000541460096102c6565b6100e2813515806100db57506001548235145b600a6102c6565b6000808055600280546100f4906103b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103b6565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103eb565b90507f5acf012610c4234455f796fff617f8634bfc720b264419729897af38abe2f21533836040516101b892919061045d565b60405180910390a16101d18160200151341460086102c6565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561020e573d6000803e3d6000fd5b5060008080556001819055610225906002906102eb565b5050565b60006060600054600280805461023e906103b6565b80601f016020809104026020016040519081016040528092919081815260200182805461026a906103b6565b80156102b75780601f1061028c576101008083540402835291602001916102b7565b820191906000526020600020905b81548152906001019060200180831161029a57829003601f168201915b50505050509050915091509091565b816102255760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102f7906103b6565b6000825580601f10610307575050565b601f0160209004906000526020600020908101906103259190610328565b50565b5b8082111561033d5760008155600101610329565b5090565b600060a0828403121561035357600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561038d57858101830151858201606001528201610371565b8181111561039f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103ca57607f821691505b6020821081141561035357634e487b7160e01b600052602260045260246000fd5b6000604082840312156103fd57600080fd5b6040516040810181811067ffffffffffffffff8211171561042e57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461044857600080fd5b81526020928301519281019290925250919050565b6001600160a01b0383168152813560208083019190915282013560408083019190915260c08201908301356001600160b01b0319811680821461049f57600080fd5b8060608501525050606083013561ffff1981168082146104be57600080fd5b806080850152505060808301358015158082146104da57600080fd5b8060a08501525050939250505056fea26469706673582212204737309f4c3df29fd19f4210b0db9c7b352d5c293677ace56fd286e20bad200f64736f6c634300080c0033`,
  BytecodeLen: 2023,
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
