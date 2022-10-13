/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DepositorCoin, DepositorCoinInterface } from "../DepositorCoin";

const _abi = [
  {
    inputs: [],
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f4465706f7369746f72436f696e000000000000000000000000000000000000008152506040518060400160405280600381526020017f4450430000000000000000000000000000000000000000000000000000000000815250816001908051906020019062000096929190620000f9565b508060029080519060200190620000af929190620000f9565b50505033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200020e565b8280546200010790620001d8565b90600052602060002090601f0160209004810192826200012b576000855562000177565b82601f106200014657805160ff191683800117855562000177565b8280016001018555821562000177579182015b828111156200017657825182559160200191906001019062000159565b5b5090506200018691906200018a565b5090565b5b80821115620001a55760008160009055506001016200018b565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001f157607f821691505b60208210811415620002085762000207620001a9565b5b50919050565b61161f806200021e6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a082311461018f5780638da5cb5b146101bf57806395d89b41146101dd5780639dc29fac146101fb578063a9059cbb14610217578063dd62ed3e14610247576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce5671461015557806340c10f1914610173575b600080fd5b6100c1610277565b6040516100ce9190610e35565b60405180910390f35b6100f160048036038101906100ec9190610ef0565b610305565b6040516100fe9190610f4b565b60405180910390f35b61010f610466565b60405161011c9190610f75565b60405180910390f35b61013f600480360381019061013a9190610f90565b61046c565b60405161014c9190610f4b565b60405180910390f35b61015d6106b3565b60405161016a9190610fff565b60405180910390f35b61018d60048036038101906101889190610ef0565b6106bc565b005b6101a960048036038101906101a4919061101a565b61075a565b6040516101b69190610f75565b60405180910390f35b6101c7610772565b6040516101d49190611056565b60405180910390f35b6101e5610798565b6040516101f29190610e35565b60405180910390f35b61021560048036038101906102109190610ef0565b610826565b005b610231600480360381019061022c9190610ef0565b6108c4565b60405161023e9190610f4b565b60405180910390f35b610261600480360381019061025c9190611071565b6108d9565b60405161026e9190610f75565b60405180910390f35b60018054610284906110e0565b80601f01602080910402602001604051908101604052809291908181526020018280546102b0906110e0565b80156102fd5780601f106102d2576101008083540402835291602001916102fd565b820191906000526020600020905b8154815290600101906020018083116102e057829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610376576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036d90611184565b60405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104549190610f75565b60405180910390a36001905092915050565b60005481565b600080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890611216565b60405180910390fd5b828161053d9190611265565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040516106969190610f75565b60405180910390a36106a98585856108fe565b9150509392505050565b60006012905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461074c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610743906112e5565b60405180910390fd5b6107568282610b0c565b5050565b60036020528060005260406000206000915090505481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600280546107a5906110e0565b80601f01602080910402602001604051908101604052809291908181526020018280546107d1906110e0565b801561081e5780601f106107f35761010080835404028352916020019161081e565b820191906000526020600020905b81548152906001019060200180831161080157829003601f168201915b505050505081565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ad90611351565b60405180910390fd5b6108c08282610c54565b5050565b60006108d13384846108fe565b905092915050565b6004602052816000526040600020602052806000526040600020600091509150505481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561096f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610966906113e3565b60405180910390fd5b6000600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156109f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ed90611475565b60405180910390fd5b8281610a029190611265565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a949190611495565b925050819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef85604051610af89190610f75565b60405180910390a360019150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7390611537565b60405180910390fd5b80600080828254610b8d9190611495565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610be39190611495565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c489190610f75565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cc4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbb906115c9565b60405180910390fd5b80600080828254610cd59190611265565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d2b9190611265565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d909190610f75565b60405180910390a35050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610dd6578082015181840152602081019050610dbb565b83811115610de5576000848401525b50505050565b6000601f19601f8301169050919050565b6000610e0782610d9c565b610e118185610da7565b9350610e21818560208601610db8565b610e2a81610deb565b840191505092915050565b60006020820190508181036000830152610e4f8184610dfc565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e8782610e5c565b9050919050565b610e9781610e7c565b8114610ea257600080fd5b50565b600081359050610eb481610e8e565b92915050565b6000819050919050565b610ecd81610eba565b8114610ed857600080fd5b50565b600081359050610eea81610ec4565b92915050565b60008060408385031215610f0757610f06610e57565b5b6000610f1585828601610ea5565b9250506020610f2685828601610edb565b9150509250929050565b60008115159050919050565b610f4581610f30565b82525050565b6000602082019050610f606000830184610f3c565b92915050565b610f6f81610eba565b82525050565b6000602082019050610f8a6000830184610f66565b92915050565b600080600060608486031215610fa957610fa8610e57565b5b6000610fb786828701610ea5565b9350506020610fc886828701610ea5565b9250506040610fd986828701610edb565b9150509250925092565b600060ff82169050919050565b610ff981610fe3565b82525050565b60006020820190506110146000830184610ff0565b92915050565b6000602082840312156110305761102f610e57565b5b600061103e84828501610ea5565b91505092915050565b61105081610e7c565b82525050565b600060208201905061106b6000830184611047565b92915050565b6000806040838503121561108857611087610e57565b5b600061109685828601610ea5565b92505060206110a785828601610ea5565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806110f857607f821691505b6020821081141561110c5761110b6110b1565b5b50919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061116e602283610da7565b915061117982611112565b604082019050919050565b6000602082019050818103600083015261119d81611161565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b6000611200602883610da7565b915061120b826111a4565b604082019050919050565b6000602082019050818103600083015261122f816111f3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061127082610eba565b915061127b83610eba565b92508282101561128e5761128d611236565b5b828203905092915050565b7f4450433a204f6e6c79206f776e65722063616e206d696e740000000000000000600082015250565b60006112cf601883610da7565b91506112da82611299565b602082019050919050565b600060208201905081810360008301526112fe816112c2565b9050919050565b7f4450433a204f6e6c79206f776e65722063616e206275726e0000000000000000600082015250565b600061133b601883610da7565b915061134682611305565b602082019050919050565b6000602082019050818103600083015261136a8161132e565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006113cd602383610da7565b91506113d882611371565b604082019050919050565b600060208201905081810360008301526113fc816113c0565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061145f602683610da7565b915061146a82611403565b604082019050919050565b6000602082019050818103600083015261148e81611452565b9050919050565b60006114a082610eba565b91506114ab83610eba565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156114e0576114df611236565b5b828201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611521601f83610da7565b915061152c826114eb565b602082019050919050565b6000602082019050818103600083015261155081611514565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006115b3602183610da7565b91506115be82611557565b604082019050919050565b600060208201905081810360008301526115e2816115a6565b905091905056fea26469706673582212203cde84821863a5b04404e3fea5c7b49ddbe57c1a8d2cd651db7509d46a57de2c64736f6c634300080b0033";

type DepositorCoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DepositorCoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DepositorCoin__factory extends ContractFactory {
  constructor(...args: DepositorCoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DepositorCoin> {
    return super.deploy(overrides || {}) as Promise<DepositorCoin>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DepositorCoin {
    return super.attach(address) as DepositorCoin;
  }
  override connect(signer: Signer): DepositorCoin__factory {
    return super.connect(signer) as DepositorCoin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositorCoinInterface {
    return new utils.Interface(_abi) as DepositorCoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DepositorCoin {
    return new Contract(address, _abi, signerOrProvider) as DepositorCoin;
  }
}
