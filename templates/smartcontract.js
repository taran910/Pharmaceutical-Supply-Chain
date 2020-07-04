var address="0x3e5bAC83ACAAeD02cd680e4EB6Fd23cC76172CFe";
var ABI=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "productid",
				"type": "uint256"
			},
			{
				"name": "productprice",
				"type": "uint256"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "retailername",
				"type": "string"
			},
			{
				"name": "phoneno",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			}
		],
		"name": "setretailerdetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "_password",
				"type": "string"
			}
		],
		"name": "validateManufacturer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_phone_number",
				"type": "uint256"
			},
			{
				"name": "_password",
				"type": "string"
			}
		],
		"name": "registerManufacturer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "getmanufacturedetails",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "customername",
				"type": "string"
			},
			{
				"name": "phoneno",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "productid",
				"type": "uint256"
			},
			{
				"name": "productprice",
				"type": "uint256"
			},
			{
				"name": "dateofpurchase",
				"type": "string"
			}
		],
		"name": "setcustomerdetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_phone_number",
				"type": "uint256"
			},
			{
				"name": "_password",
				"type": "string"
			}
		],
		"name": "registerRetailer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "_password",
				"type": "string"
			}
		],
		"name": "validateRetailer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "getdistributordetails",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "getretailerdetails",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_phone_number",
				"type": "uint256"
			},
			{
				"name": "_password",
				"type": "string"
			}
		],
		"name": "registerDistributor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "productid",
				"type": "uint256"
			},
			{
				"name": "productprice",
				"type": "uint256"
			},
			{
				"name": "pdate",
				"type": "string"
			},
			{
				"name": "distributorname",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "phoneno",
				"type": "string"
			}
		],
		"name": "setdistributordetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "productid",
				"type": "uint256"
			},
			{
				"name": "productname",
				"type": "string"
			},
			{
				"name": "productcategory",
				"type": "string"
			},
			{
				"name": "productprice",
				"type": "uint256"
			},
			{
				"name": "dom",
				"type": "string"
			},
			{
				"name": "manufacturername",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "phoneno",
				"type": "string"
			}
		],
		"name": "setmanufacturedetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "_password",
				"type": "string"
			}
		],
		"name": "validateDistributor",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "getcustomerdetails",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]