/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Oracle, OracleInterface } from "../Oracle";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getPrice",
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
    inputs: [
      {
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610305806100606000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638da5cb5b1461004657806391b7f5ed1461006457806398d5fdca14610080575b600080fd5b61004e61009e565b60405161005b91906101a5565b60405180910390f35b61007e600480360381019061007991906101fb565b6100c2565b005b61008861015a565b6040516100959190610237565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610150576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610147906102af565b60405180910390fd5b8060018190555050565b6000600154905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061018f82610164565b9050919050565b61019f81610184565b82525050565b60006020820190506101ba6000830184610196565b92915050565b600080fd5b6000819050919050565b6101d8816101c5565b81146101e357600080fd5b50565b6000813590506101f5816101cf565b92915050565b600060208284031215610211576102106101c0565b5b600061021f848285016101e6565b91505092915050565b610231816101c5565b82525050565b600060208201905061024c6000830184610228565b92915050565b600082825260208201905092915050565b7f4f7261636c653a206f6e6c79206f776e65720000000000000000000000000000600082015250565b6000610299601283610252565b91506102a482610263565b602082019050919050565b600060208201905081810360008301526102c88161028c565b905091905056fea26469706673582212208f54071a0691b20173cfd503cb35adff1cf8b144c73db6ac04f5408186f251db64736f6c634300080b0033";

type OracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Oracle__factory extends ContractFactory {
  constructor(...args: OracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Oracle> {
    return super.deploy(overrides || {}) as Promise<Oracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Oracle {
    return super.attach(address) as Oracle;
  }
  override connect(signer: Signer): Oracle__factory {
    return super.connect(signer) as Oracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleInterface {
    return new utils.Interface(_abi) as OracleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Oracle {
    return new Contract(address, _abi, signerOrProvider) as Oracle;
  }
}
