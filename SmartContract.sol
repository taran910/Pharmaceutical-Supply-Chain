pragma solidity ^0.4.26;
contract Pharma{
    struct Manufacturer{
        string name;
        string email;
        uint256 phone_number;
        string password;
        uint256 id;
    }
    Manufacturer[] manufacturers;
    uint256 mid=0;
    function registerManufacturer(string _name,string _email,uint256 _phone_number,string _password) public{
        Manufacturer memory m=Manufacturer(_name,_email,_phone_number,_password,mid);
        manufacturers.push(m);
        mid+=1;
    }
    function validateManufacturer(uint256 _id,string _password) public view returns(bool,string,string,uint256,uint256){
        
            Manufacturer memory m=manufacturers[_id];
            if(keccak256(abi.encodePacked(m.id))==keccak256(abi.encodePacked(_id)) && keccak256(abi.encodePacked(m.password))==keccak256(abi.encodePacked(_password))){
                return (true,m.name,m.email,m.phone_number,m.id);
            }
            else{
                return (false,"","",0,0);
            }
        
    }
    struct Retailer{
        string name;
        string email;
        uint256 phone_number;
        string password;
        uint256 id;
    }
    Retailer[] retailers;
    uint256 rid=0;
     function registerRetailer(string _name,string _email,uint256 _phone_number,string _password) public{
        Retailer memory r=Retailer(_name,_email,_phone_number,_password,rid);
        retailers.push(r);
        rid+=1;
    }
    function validateRetailer(uint256 _id,string _password) public view returns(bool,string,string,uint256,uint256){
        
            Retailer memory r=retailers[_id];
            if(keccak256(abi.encodePacked(r.id))==keccak256(abi.encodePacked(_id)) && keccak256(abi.encodePacked(r.password))==keccak256(abi.encodePacked(_password))){
                return (true,r.name,r.email,r.phone_number,r.id);
            }
            else{
                return (false,"","",0,0);
            }
        
    }
    struct Distributor{
        string name;
        string email;
        uint256 phone_number;
        string password;
        uint256 id;
    }
    Distributor[] distributors;
    uint256 did=0;
     function registerDistributor(string _name,string _email,uint256 _phone_number,string _password) public{
        Distributor memory d=Distributor(_name,_email,_phone_number,_password,did);
        distributors.push(d);
        did+=1;
    }
    function validateDistributor(uint256 _id,string _password) public view returns(bool,string,string,uint256,uint256){
        
            Distributor memory d=distributors[_id];
            if(keccak256(abi.encodePacked(d.id))==keccak256(abi.encodePacked(_id)) && keccak256(abi.encodePacked(d.password))==keccak256(abi.encodePacked(_password))){
                return (true,d.name,d.email,d.phone_number,d.id);
            }
            else{
                return (false,"","",0,0);
            }
        
    }
    
    // Linking data ------------------------------------------------------------------>
    struct pmanufacturer{
        
        uint256 productid;
        string productname;
        string productcategory;
        uint256 productprice;
        string dom;
        string manufacturername;
        string email;
        string phoneno;
        
    }
    struct pdistributor{
        uint256 productid;
        uint256 productprice;
        string pdate;
        string distributorname;
        string email;
        string phoneno;
    }
    struct pretailer{
        uint256 productid;
        uint256 productprice;
        string date;
        string retailername;
        string phoneno;
        string email;
        
    }
    struct pcustomer{
        string customername;
        string phoneno;
        string email;
        uint256 productid;
        uint256 productprice;
        string dateofpurchase;
    
    }
    pmanufacturer [] pm;
    pdistributor [] pd;
    pretailer [] pr;
    pcustomer [] pc;
    
    function setmanufacturedetails(uint256 productid,string productname,string productcategory,uint256 productprice,string dom,string manufacturername,string email,string phoneno)public {
        pmanufacturer memory m = pmanufacturer(productid,productname,productcategory,productprice,dom,manufacturername,email,phoneno);
        pm.push(m);
    }
    function getmanufacturedetails(uint256 pid) public view returns(uint256,string, string, uint256, string, string,string,string){
        uint256 i = 0;
        for(i = 0; i < pm.length; i++)
        {
            if(keccak256(abi.encodePacked(pm[i].productid)) == keccak256(abi.encodePacked(pid)))
            {
                return(pm[i].productid,pm[i].productname,pm[i].productcategory,pm[i].productprice,pm[i].dom,pm[i].manufacturername,pm[i].email,pm[i].phoneno);
            }
            else
            {
                return(0,"","",0,"","","","");
            }
        }
    }
    
    function setdistributordetails(uint256 productid, uint256 productprice, string pdate,string distributorname, string email, string phoneno)public {
        pdistributor memory d = pdistributor(productid,productprice,pdate,distributorname,email,phoneno);
        pd.push(d);
    }
    function getdistributordetails(uint256 pid) public view returns(uint256,uint256, string, string,string,string){
        uint256 i = 0;
        for(i = 0; i < pd.length; i++)
        {
            if(keccak256(abi.encodePacked(pd[i].productid)) == keccak256(abi.encodePacked(pid)))
            {
                return(pd[i].productid,pd[i].productprice,pd[i].pdate,pd[i].distributorname,pd[i].email,pd[i].phoneno);
            }
            else
            {
                return(0,0,"","","","");
            }
        }
    }
    
    function setretailerdetails(uint256 productid, uint256 productprice, string date, string retailername, string phoneno, string email)public {
        pretailer memory r = pretailer(productid,productprice,date,retailername,phoneno,email);
        pr.push(r);
    }
    function getretailerdetails(uint256 pid) public view returns(uint256,uint256, string, string,string,string){
        uint256 i = 0;
        for(i = 0; i < pr.length; i++)
        {
            if(keccak256(abi.encodePacked(pr[i].productid)) == keccak256(abi.encodePacked(pid)))
            {
                return(pr[i].productid,pr[i].productprice,pr[i].date,pr[i].retailername,pr[i].phoneno,pr[i].email);
            }
            else
            {
                return(0,0,"","","","");
            }
        }
    }
    
    function setcustomerdetails(string customername, string phoneno, string email, uint256 productid, uint256 productprice, string dateofpurchase)public {
        pcustomer memory c = pcustomer(customername, phoneno,email, productid, productprice, dateofpurchase);
        pc.push(c);
    }
    function getcustomerdetails(uint256 pid) public view returns(string, string,string,uint256, uint256,string){
        uint256 i = 0;
        for(i = 0; i < pc.length; i++)
        {
            if(keccak256(abi.encodePacked(pc[i].productid)) == keccak256(abi.encodePacked(pid)))
            {
                return(pc[i].customername,pc[i].phoneno,pc[i].email,pc[i].productid,pc[i].productprice,pc[i].dateofpurchase);
            }
            else
            {
                return("","","",0,0,"");
            }
        }
    }
}