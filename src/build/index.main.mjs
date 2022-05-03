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
  
  return {
    infos: {
      },
    views: {
      1: []
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Object({
    id: ctc1,
    registrar: ctc0,
    status: ctc2
    });
  
  
  const v52 = stdlib.protect(ctc0, await interact.getRequesterAddress(), {
    at: './index.rsh:31:69:application',
    fs: ['at ./index.rsh:30:17:application call to [unknown function] (defined at: ./index.rsh:30:21:function exp)'],
    msg: 'getRequesterAddress',
    who: 'Requester'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v52],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v54], secs: v56, time: v55, didSend: v27, from: v53 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v54], secs: v56, time: v55, didSend: v27, from: v53 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v64], secs: v66, time: v65, didSend: v39, from: v63 } = txn2;
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Object({
    id: ctc1,
    registrar: ctc0,
    status: ctc2
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v54], secs: v56, time: v55, didSend: v27, from: v53 } = txn1;
  ;
  const v59 = stdlib.protect(ctc3, await interact.getTranscript(v54), {
    at: './index.rsh:39:57:application',
    fs: ['at ./index.rsh:38:18:application call to [unknown function] (defined at: ./index.rsh:38:22:function exp)'],
    msg: 'getTranscript',
    who: 'University'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v59],
    evt_cnt: 1,
    funcNum: 1,
    lct: v55,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v64], secs: v66, time: v65, didSend: v39, from: v63 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v64], secs: v66, time: v65, didSend: v39, from: v63 } = txn2;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA1ChkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAACUjEkQjNAESRDQESSISTDQCEhFESTUFNf+ABOJUIsY0/1CwQgAxSCI0ARJENARJIhJMNAISEURJNQU1/4AE+4Zv7jT/ULCBoI0GiABjIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
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
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
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
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_registrar",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T3",
                "name": "v64",
                "type": "tuple"
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_registrar",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T3",
                "name": "v64",
                "type": "tuple"
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516106f93803806106f983398101604081905261002291610185565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a1610085341560076100c3565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100bb9260029201906100ec565b505050610279565b816100e85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100f89061023e565b90600052602060002090601f01602090048101928261011a5760008555610160565b82601f1061013357805160ff1916838001178555610160565b82800160010185558215610160579182015b82811115610160578251825591602001919060010190610145565b5061016c929150610170565b5090565b5b8082111561016c5760008155600101610171565b600081830360408082121561019957600080fd5b80518082016001600160401b0380821183831017156101c857634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101e157600080fd5b83519450602085019150848210818311171561020d57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b038216821461022c57600080fd5b90825260208101919091529392505050565b600181811c9082168061025257607f821691505b6020821081141561027357634e487b7160e01b600052602260045260246000fd5b50919050565b610471806102886000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780637e33df7c1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b3660046102fe565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa6101e6565b604051610064929190610316565b6100c86001600054146009610283565b6100e2813515806100db57506001548235145b600a610283565b6000808055600280546100f490610373565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610373565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103b6565b90507fd34a84fba8a496cc62b2077cdb58cbf69da19109a6a262c4e40944164febb78e33836040516101b89291906103da565b60405180910390a16101cc34156008610283565b600080805560018190556101e2906002906102a8565b5050565b6000606060005460028080546101fb90610373565b80601f016020809104026020016040519081016040528092919081815260200182805461022790610373565b80156102745780601f1061024957610100808354040283529160200191610274565b820191906000526020600020905b81548152906001019060200180831161025757829003601f168201915b50505050509050915091509091565b816101e25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b490610373565b6000825580601f106102c4575050565b601f0160209004906000526020600020908101906102e291906102e5565b50565b5b808211156102fa57600081556001016102e6565b5090565b60006080828403121561031057600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561034a5785810183015185820160600152820161032e565b8181111561035c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061038757607f821691505b6020821081141561031057634e487b7160e01b600052602260045260246000fd5b80151581146102e257600080fd5b6000602082840312156103c857600080fd5b81516103d3816103a8565b9392505050565b600060a08201905060018060a01b03808516835283356020840152602084013560408401526040840135818116915081811461041557600080fd5b5080606084015250606083013561042b816103a8565b801515608084015250939250505056fea2646970667358221220100c6ee7afe595552e72f35ddbca0fc3b7f5c48b7c8638dd2a032db931b467d164736f6c634300080c0033`,
  BytecodeLen: 1785,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:35:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:43:13:after expr stmt semicolon',
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
