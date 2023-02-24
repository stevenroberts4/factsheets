<script>
    import { read } from "xlsx";
    export let file


    $: if(file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const data = e.target.result;
            const workbook = read(data, { type: "binary" });

            const wsnames = workbook.SheetNames;

            


            const first_sheet_name = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[first_sheet_name];
            console.log(worksheet);
        };
        reader.readAsBinaryString(file);
    }


    /*

    // The AUM file contains multiple sheets, one for each quarter end in the format Mmm DD YYYY, or Mmmm DD YYYY

    // AUM file is expected to have the following columns:
    
    A:  Omni Client
    B:  Period End Date	
    C:  Count
    D:  Client Identifier
    E:  Inception Date
    F:  Client Type
    G:  Institutional or Retail	
    H:  Discretionary or Not
    I:  Tax Status
    J:  Pension Type
    K:  Domicile
    L:  Country Tag
    M:  US Tag
    N:  State
    O:  Investment Style
    P:  Investment Vehicle
    Q:  Asset Class
    R:  Composite Name
    S:  Product Name
    T:  Product Name In Database
    U:  Investment Region
    V:  Manager
    W:  Mutual Fund Tag
    X:  AUM in Million

    // Starting in row 2, we are interested in the following columns:

    B:  Period End Date (date)
    D:  Client Identifier (text)
    E:  Inception Date (date)
    S:  Product Name (text)
    T:  Product Name In Database (text)
    V:  Manager (text)
    X:  AUM in Million (float)

    // We continmue until we reach a blank value in column A

    */


</script>

<p>{file.name}</p>