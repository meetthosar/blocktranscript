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
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0],
      3: [ctc0, ctc1, ctc0]
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc5 = stdlib.T_Object({
    code: ctc2,
    found: ctc3,
    name: ctc4,
    status: ctc3
    });
  const ctc6 = stdlib.T_Address;
  
  
  const v106 = stdlib.protect(ctc0, interact.studentCode, 'for Requester\'s interact field studentCode');
  const v112 = stdlib.protect(ctc0, interact.university, 'for Requester\'s interact field university');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v116, v117, v118], secs: v120, time: v119, didSend: v38, from: v115 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v115, v117, v106, v112],
    evt_cnt: 2,
    funcNum: 1,
    lct: v119,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v124, v125], secs: v127, time: v126, didSend: v47, from: v123 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v124, v125], secs: v127, time: v126, didSend: v47, from: v123 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.isServing(true), {
    at: './index.rsh:60:23:application',
    fs: ['at ./index.rsh:59:7:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'isServing',
    who: 'Requester'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v140], secs: v142, time: v141, didSend: v67, from: v139 } = txn3;
  ;
  const v143 = stdlib.addressEq(v115, v139);
  stdlib.assert(v143, {
    at: './index.rsh:67:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Requester'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v115, v117, v123],
    evt_cnt: 0,
    funcNum: 3,
    lct: v141,
    onlyIf: true,
    out_tys: [],
    pay: [v117, []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v146, time: v145, didSend: v74, from: v144 } = txn4;
      
      sim_r.txns.push({
        amt: v117,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v149 = stdlib.addressEq(v123, v144);
      ;
      sim_r.txns.push({
        amt: v117,
        kind: 'from',
        to: v115,
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
    tys: [ctc6, ctc0, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v146, time: v145, didSend: v74, from: v144 } = txn4;
  ;
  const v149 = stdlib.addressEq(v123, v144);
  stdlib.assert(v149, {
    at: './index.rsh:75:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Requester'
    });
  ;
  stdlib.protect(ctc1, await interact.sendTranscript(v140), {
    at: './index.rsh:78:30:application',
    fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:21:function exp)'],
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc5 = stdlib.T_Object({
    code: ctc2,
    found: ctc3,
    name: ctc4,
    status: ctc3
    });
  const ctc6 = stdlib.T_Address;
  
  
  const v103 = stdlib.protect(ctc0, interact.deadline, 'for University\'s interact field deadline');
  const v104 = stdlib.protect(ctc0, interact.price, 'for University\'s interact field price');
  const v105 = stdlib.protect(ctc0, interact.universityCode, 'for University\'s interact field universityCode');
  
  const txn1 = await (ctc.sendrecv({
    args: [v105, v104, v103],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:41:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v116, v117, v118], secs: v120, time: v119, didSend: v38, from: v115 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v116, v117, v118], secs: v120, time: v119, didSend: v38, from: v115 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v124, v125], secs: v127, time: v126, didSend: v47, from: v123 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.isServing(true), {
    at: './index.rsh:60:23:application',
    fs: ['at ./index.rsh:59:7:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'isServing',
    who: 'University'
    });
  
  const v134 = stdlib.protect(ctc5, await interact.requestTranscript(v125, v124), {
    at: './index.rsh:64:61:application',
    fs: ['at ./index.rsh:63:9:application call to [unknown function] (defined at: ./index.rsh:63:13:function exp)'],
    msg: 'requestTranscript',
    who: 'University'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v115, v117, v123, v134],
    evt_cnt: 1,
    funcNum: 2,
    lct: v126,
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v140], secs: v142, time: v141, didSend: v67, from: v139 } = txn3;
      
      ;
      const v143 = stdlib.addressEq(v115, v139);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc6, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v140], secs: v142, time: v141, didSend: v67, from: v139 } = txn3;
  ;
  const v143 = stdlib.addressEq(v115, v139);
  stdlib.assert(v143, {
    at: './index.rsh:67:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'University'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v146, time: v145, didSend: v74, from: v144 } = txn4;
  ;
  const v149 = stdlib.addressEq(v123, v144);
  stdlib.assert(v149, {
    at: './index.rsh:75:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'University'
    });
  ;
  stdlib.protect(ctc1, await interact.sendTranscript(v140), {
    at: './index.rsh:78:30:application',
    fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:21:function exp)'],
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
  appApproval: `BiAGAAEDCAIgJgIBAAAiNQAxGEEB1ylkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAKZJJAxAAEgkEkQkNAESRDQESSISTDQCEhFEKGRJNQMhBVs1/4AEp2XEtLA0/4gBgzQDVyggMQASRLEisgE0/7III7IQNANXACCyB7NCAQtIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/lcoIDX9STUFNfyABDO2CAw0/FCwNP8xABJENP80/hZQNP1QKEsBVwBIZ0gkNQEyBjUCQgDPSSMMQABYSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEFWzX+STUFSSJbNf0lWzX8gATHtgrVNP0WUDT8FlCwNP80/hZQMQBQKEsBVwBIZ0ghBDUBMgY1AkIAcUgiNAESRDQESSISTDQCEhFESTUFSUkiWzX/JVs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsIGgjQaIAHExADT+FlAoSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
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
                "name": "v116",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v117",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v118",
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
                "name": "v116",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v117",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v118",
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
                "name": "v124",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v125",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes10",
                        "name": "elem0",
                        "type": "bytes10"
                      }
                    ],
                    "internalType": "struct T6",
                    "name": "_code",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_found",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes30",
                        "name": "elem0",
                        "type": "bytes30"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "_name",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T8",
                "name": "v140",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "name": "v124",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v125",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes10",
                        "name": "elem0",
                        "type": "bytes10"
                      }
                    ],
                    "internalType": "struct T6",
                    "name": "_code",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_found",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes30",
                        "name": "elem0",
                        "type": "bytes30"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "_name",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T8",
                "name": "v140",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d0d38038062000d0d833981016040819052620000269162000204565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a16200009534156007620000fd565b6040805180820182526000602080830182815233808552868301518301518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000f4926002929091019062000127565b505050620002d8565b81620001235760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000135906200029b565b90600052602060002090601f016020900481019282620001595760008555620001a4565b82601f106200017457805160ff1916838001178555620001a4565b82800160010185558215620001a4579182015b82811115620001a457825182559160200191906001019062000187565b50620001b2929150620001b6565b5090565b5b80821115620001b25760008155600101620001b7565b604051606081016001600160401b0381118282101715620001fe57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200021857600080fd5b604080519081016001600160401b03811182821017156200024957634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200026357600080fd5b6200026d620001cd565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c90821680620002b057607f821691505b60208210811415620002d257634e487b7160e01b600052602260045260246000fd5b50919050565b610a2580620002e86000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806342ae229d1461008357806373b4522c1461009657806382c0268e146100a957806383230757146100bc578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d61009136600461075e565b6100f4565b61005d6100a4366004610776565b6102a7565b61005d6100b7366004610788565b610433565b3480156100c857600080fd5b50600154610070565b3480156100dd57600080fd5b506100e66105c6565b60405161007a92919061079a565b6101046001600054146009610663565b61011e8135158061011757506001548235145b600a610663565b600080805560028054610130906107f7565b80601f016020809104026020016040519081016040528092919081815260200182805461015c906107f7565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610848565b604080513381528435602080830191909152850135818301529084013560608201529091507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a161021f34156008610663565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151845233835260029095554360015587519384019490945290519582019590955293511690830152906080015b604051602081830303815290604052600290805190602001906102a1929190610688565b50505050565b6102b76003600054146011610663565b6102d1813515806102ca57506001548235145b6012610663565b6000808055600280546102e3906107f7565b80601f016020809104026020016040519081016040528092919081815260200182805461030f906107f7565b801561035c5780601f106103315761010080835404028352916020019161035c565b820191906000526020600020905b81548152906001019060200180831161033f57829003601f168201915b505050505080602001905181019061037491906108ad565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633836040516103a7929190610930565b60405180910390a16103c081602001513414600f610663565b60408101516103db906001600160a01b031633146010610663565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610418573d6000803e3d6000fd5b506000808055600181905561042f9060029061070c565b5050565b610443600260005414600d610663565b61045d8135158061045657506001548235145b600e610663565b60008080556002805461046f906107f7565b80601f016020809104026020016040519081016040528092919081815260200182805461049b906107f7565b80156104e85780601f106104bd576101008083540402835291602001916104e8565b820191906000526020600020905b8154815290600101906020018083116104cb57829003601f168201915b505050505080602001905181019061050091906108ad565b90507fd4f8be3008c3533802b953c15a1977530608b08f7b9e59bdccf5eed645b345683383604051610533929190610965565b60405180910390a16105473415600b610663565b805161055f906001600160a01b03163314600c610663565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015184528989015182168352600390955543600155875193840194909452905195820195909552935116908301529060800161027d565b6000606060005460028080546105db906107f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610607906107f7565b80156106545780601f1061062957610100808354040283529160200191610654565b820191906000526020600020905b81548152906001019060200180831161063757829003601f168201915b50505050509050915091509091565b8161042f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610694906107f7565b90600052602060002090601f0160209004810192826106b657600085556106fc565b82601f106106cf57805160ff19168380011785556106fc565b828001600101855582156106fc579182015b828111156106fc5782518255916020019190600101906106e1565b50610708929150610749565b5090565b508054610718906107f7565b6000825580601f10610728575050565b601f0160209004906000526020600020908101906107469190610749565b50565b5b80821115610708576000815560010161074a565b60006060828403121561077057600080fd5b50919050565b60006040828403121561077057600080fd5b600060a0828403121561077057600080fd5b82815260006020604081840152835180604085015260005b818110156107ce578581018301518582016060015282016107b2565b818111156107e0576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061080b57607f821691505b6020821081141561077057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461084357600080fd5b919050565b60006040828403121561085a57600080fd5b6040516040810181811067ffffffffffffffff8211171561088b57634e487b7160e01b600052604160045260246000fd5b6040526108978361082c565b8152602083015160208201528091505092915050565b6000606082840312156108bf57600080fd5b6040516060810181811067ffffffffffffffff821117156108f057634e487b7160e01b600052604160045260246000fd5b6040526108fc8361082c565b8152602083015160208201526109146040840161082c565b60408201529392505050565b8035801515811461084357600080fd5b6001600160a01b038316815281356020808301919091526060820190610957908401610920565b151560408301529392505050565b6001600160a01b0383168152813560208083019190915260c08201908301356001600160b01b0319811680821461099b57600080fd5b80604085015250506109af60408401610920565b15156060830152606083013561ffff1981168082146109cd57600080fd5b80608085015250506109e160808401610920565b151560a0830152939250505056fea264697066735822122065bb6055789b42b94d7a8642dd4e28f33f2f7e25e4243d6cbecdc307bc9c8c4d64736f6c634300080c0033`,
  BytecodeLen: 3341,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:42:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:53:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:68:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:81:11:after expr stmt semicolon',
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
