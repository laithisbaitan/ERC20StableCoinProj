/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { StableCoin, StableCoinInterface } from "../StableCoin";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feeRatePercentage",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "burnStableCoinAmount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "depositorCoin",
    outputs: [
      {
        internalType: "contract DepositorCoin",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeRatePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001e8d38038062001e8d833981810160405281019062000037919062000341565b6040518060400160405280600a81526020017f537461626c65436f696e000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f53544300000000000000000000000000000000000000000000000000000000008152508160019080519060200190620000bb92919062000251565b508060029080519060200190620000d492919062000251565b50620000f03368056bc75e2d631000006200010060201b60201c565b5050806006819055505062000515565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000173576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200016a90620003d4565b60405180910390fd5b8060008082825462000186919062000425565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001de919062000425565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000245919062000493565b60405180910390a35050565b8280546200025f90620004df565b90600052602060002090601f016020900481019282620002835760008555620002cf565b82601f106200029e57805160ff1916838001178555620002cf565b82800160010185558215620002cf579182015b82811115620002ce578251825591602001919060010190620002b1565b5b509050620002de9190620002e2565b5090565b5b80821115620002fd576000816000905550600101620002e3565b5090565b600080fd5b6000819050919050565b6200031b8162000306565b81146200032757600080fd5b50565b6000815190506200033b8162000310565b92915050565b6000602082840312156200035a576200035962000301565b5b60006200036a848285016200032a565b91505092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620003bc601f8362000373565b9150620003c98262000384565b602082019050919050565b60006020820190508181036000830152620003ef81620003ad565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620004328262000306565b91506200043f8362000306565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620004775762000476620003f6565b5b828201905092915050565b6200048d8162000306565b82525050565b6000602082019050620004aa600083018462000482565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004f857607f821691505b602082108114156200050f576200050e620004b0565b5b50919050565b61196880620005256000396000f3fe6080604052600436106100c25760003560e01c806342966c681161007f57806395d89b411161005957806395d89b411461025d578063a9059cbb14610288578063cf1137ff146102c5578063dd62ed3e146102f0576100c2565b806342966c68146101cc57806370a08231146101f557806378e037ba14610232576100c2565b806306fdde03146100c7578063095ea7b3146100f25780631249c58b1461012f57806318160ddd1461013957806323b872dd14610164578063313ce567146101a1575b600080fd5b3480156100d357600080fd5b506100dc61032d565b6040516100e99190611005565b60405180910390f35b3480156100fe57600080fd5b50610119600480360381019061011491906110c0565b6103bb565b604051610126919061111b565b60405180910390f35b61013761051c565b005b34801561014557600080fd5b5061014e61055a565b60405161015b9190611145565b60405180910390f35b34801561017057600080fd5b5061018b60048036038101906101869190611160565b610560565b604051610198919061111b565b60405180910390f35b3480156101ad57600080fd5b506101b66107a7565b6040516101c391906111cf565b60405180910390f35b3480156101d857600080fd5b506101f360048036038101906101ee91906111ea565b6107b0565b005b34801561020157600080fd5b5061021c60048036038101906102179190611217565b61089c565b6040516102299190611145565b60405180910390f35b34801561023e57600080fd5b506102476108b4565b60405161025491906112a3565b60405180910390f35b34801561026957600080fd5b506102726108da565b60405161027f9190611005565b60405180910390f35b34801561029457600080fd5b506102af60048036038101906102aa91906110c0565b610968565b6040516102bc919061111b565b60405180910390f35b3480156102d157600080fd5b506102da61097d565b6040516102e79190611145565b60405180910390f35b3480156102fc57600080fd5b50610317600480360381019061031291906112be565b610983565b6040516103249190611145565b60405180910390f35b6001805461033a9061132d565b80601f01602080910402602001604051908101604052809291908181526020018280546103669061132d565b80156103b35780601f10610388576101008083540402835291602001916103b3565b820191906000526020600020905b81548152906001019060200180831161039657829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561042c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610423906113d1565b60405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161050a9190611145565b60405180910390a36001905092915050565b6000610527346109a8565b9050600081346105379190611420565b905060006107d0826105499190611454565b90506105553382610ace565b505050565b60005481565b600080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610625576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061c90611520565b60405180910390fd5b82816106319190611420565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460405161078a9190611145565b60405180910390a361079d858585610c16565b9150509392505050565b60006012905090565b6107ba3382610e24565b60006107d0826107ca919061156f565b905060006107d7826109a8565b9050600081836107e79190611420565b905060003373ffffffffffffffffffffffffffffffffffffffff168260405161080f906115d1565b60006040518083038185875af1925050503d806000811461084c576040519150601f19603f3d011682016040523d82523d6000602084013e610851565b606091505b5050905080610895576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088c90611658565b60405180910390fd5b5050505050565b60036020528060005260406000206000915090505481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600280546108e79061132d565b80601f01602080910402602001604051908101604052809291908181526020018280546109139061132d565b80156109605780601f1061093557610100808354040283529160200191610960565b820191906000526020600020905b81548152906001019060200180831161094357829003601f168201915b505050505081565b6000610975338484610c16565b905092915050565b60065481565b6004602052816000526040600020602052806000526040600020600091509150505481565b600080600073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015610a9a57506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a98919061168d565b115b905080610aab576000915050610ac9565b606483600654610abb9190611454565b610ac5919061156f565b9150505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3590611706565b60405180910390fd5b80600080828254610b4f9190611726565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ba59190611726565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c0a9190611145565b60405180910390a35050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7e906117ee565b60405180910390fd5b6000600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610d0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0590611880565b60405180910390fd5b8281610d1a9190611420565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dac9190611726565b925050819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef85604051610e109190611145565b60405180910390a360019150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8b90611912565b60405180910390fd5b80600080828254610ea59190611420565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610efb9190611420565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f609190611145565b60405180910390a35050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610fa6578082015181840152602081019050610f8b565b83811115610fb5576000848401525b50505050565b6000601f19601f8301169050919050565b6000610fd782610f6c565b610fe18185610f77565b9350610ff1818560208601610f88565b610ffa81610fbb565b840191505092915050565b6000602082019050818103600083015261101f8184610fcc565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110578261102c565b9050919050565b6110678161104c565b811461107257600080fd5b50565b6000813590506110848161105e565b92915050565b6000819050919050565b61109d8161108a565b81146110a857600080fd5b50565b6000813590506110ba81611094565b92915050565b600080604083850312156110d7576110d6611027565b5b60006110e585828601611075565b92505060206110f6858286016110ab565b9150509250929050565b60008115159050919050565b61111581611100565b82525050565b6000602082019050611130600083018461110c565b92915050565b61113f8161108a565b82525050565b600060208201905061115a6000830184611136565b92915050565b60008060006060848603121561117957611178611027565b5b600061118786828701611075565b935050602061119886828701611075565b92505060406111a9868287016110ab565b9150509250925092565b600060ff82169050919050565b6111c9816111b3565b82525050565b60006020820190506111e460008301846111c0565b92915050565b600060208284031215611200576111ff611027565b5b600061120e848285016110ab565b91505092915050565b60006020828403121561122d5761122c611027565b5b600061123b84828501611075565b91505092915050565b6000819050919050565b600061126961126461125f8461102c565b611244565b61102c565b9050919050565b600061127b8261124e565b9050919050565b600061128d82611270565b9050919050565b61129d81611282565b82525050565b60006020820190506112b86000830184611294565b92915050565b600080604083850312156112d5576112d4611027565b5b60006112e385828601611075565b92505060206112f485828601611075565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061134557607f821691505b60208210811415611359576113586112fe565b5b50919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006113bb602283610f77565b91506113c68261135f565b604082019050919050565b600060208201905081810360008301526113ea816113ae565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061142b8261108a565b91506114368361108a565b925082821015611449576114486113f1565b5b828203905092915050565b600061145f8261108a565b915061146a8361108a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156114a3576114a26113f1565b5b828202905092915050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b600061150a602883610f77565b9150611515826114ae565b604082019050919050565b60006020820190508181036000830152611539816114fd565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061157a8261108a565b91506115858361108a565b92508261159557611594611540565b5b828204905092915050565b600081905092915050565b50565b60006115bb6000836115a0565b91506115c6826115ab565b600082019050919050565b60006115dc826115ae565b9150819050919050565b7f5354433a204275726e20726566756e64207472616e73616374696f6e2066616960008201527f6c65640000000000000000000000000000000000000000000000000000000000602082015250565b6000611642602383610f77565b915061164d826115e6565b604082019050919050565b6000602082019050818103600083015261167181611635565b9050919050565b60008151905061168781611094565b92915050565b6000602082840312156116a3576116a2611027565b5b60006116b184828501611678565b91505092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006116f0601f83610f77565b91506116fb826116ba565b602082019050919050565b6000602082019050818103600083015261171f816116e3565b9050919050565b60006117318261108a565b915061173c8361108a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611771576117706113f1565b5b828201905092915050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006117d8602383610f77565b91506117e38261177c565b604082019050919050565b60006020820190508181036000830152611807816117cb565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061186a602683610f77565b91506118758261180e565b604082019050919050565b600060208201905081810360008301526118998161185d565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006118fc602183610f77565b9150611907826118a0565b604082019050919050565b6000602082019050818103600083015261192b816118ef565b905091905056fea26469706673582212209a5cb34aceb76b516c054cbe1e6d29def2037d72f8e6aae738c02aa1a681e1eb64736f6c634300080b0033";

type StableCoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StableCoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StableCoin__factory extends ContractFactory {
  constructor(...args: StableCoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _feeRatePercentage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StableCoin> {
    return super.deploy(
      _feeRatePercentage,
      overrides || {}
    ) as Promise<StableCoin>;
  }
  override getDeployTransaction(
    _feeRatePercentage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_feeRatePercentage, overrides || {});
  }
  override attach(address: string): StableCoin {
    return super.attach(address) as StableCoin;
  }
  override connect(signer: Signer): StableCoin__factory {
    return super.connect(signer) as StableCoin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StableCoinInterface {
    return new utils.Interface(_abi) as StableCoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StableCoin {
    return new Contract(address, _abi, signerOrProvider) as StableCoin;
  }
}
