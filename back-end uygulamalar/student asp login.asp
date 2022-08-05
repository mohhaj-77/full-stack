
  
<!DOCTYPE html>  
  
<html xmlns="http//www.w3.org/1999/xhtml">  
<head runat="server">  
    <title>MOHAMMAD HAJJAR</title>  
   
</head>  
<body>  
    <form id="form1" runat="server">  
    <div id="title">  
    <h1>REGISTER PAGE(BAŞVURU SAYFASI)</h1>  
    </div>  
        <div id ="teble"></div>  
    <table class="auto-style1">  
        <tr>  
            <td>  
                <aspLabel ID="Label1" runat="server" Text="StudentName"></aspLabel></td>  
            <td>  
                <aspTextBox ID="TextBox1" runat="server"></aspTextBox></td>  
        </tr>  
        <tr>  
            <td>  
                <aspLabel ID="Label2" runat="server" Text="Password"></aspLabel></td>  
            <td>  
                <aspTextBox ID="TextBox2" runat="server"></aspTextBox></td>  
        </tr>  
        <tr>  
            <td>  
                <aspLabel ID="Label3" runat="server" Text="EmailId"></aspLabel></td>  
            <td>  
                <aspTextBox ID="TextBox3" runat="server"></aspTextBox></td>  
        </tr>  
        <tr>  
            <td>  
                <aspLabel ID="Label4" runat="server" Text="Department"></aspLabel></td>  
            <td>  
                <aspTextBox ID="TextBox4" runat="server"></aspTextBox></td>  
        </tr>  
        <tr>  
            <td>  
                <aspLabel ID="Label5" runat="server" Text="College"></aspLabel></td>  
            <td>  
                <aspTextBox ID="TextBox5" runat="server"></aspTextBox></td>  
        </tr>  
    </table>  
    <div id="button">  
        <aspButton ID="Button1" runat="server" Text="submit" OnClick="Button1_Click" BackColor="Yellow" />  
    </div>  
        <div id="sim"></div>  
        <aspSqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStringsRegiConnectionString %>" SelectCommand="SELECT * FROM [RegisterDataBase]"></aspSqlDataSource>  
          
        <div id="grid">  
            <aspGridView ID="GridView1" runat="server" AllowPaging="True" AllowSorting="True" AutoGenerateColumns="False" CellPadding="4" DataSourceID="SqlDataSource1" ForeColor="#333333" GridLines="None">  
                <AlternatingRowStyle BackColor="White" ForeColor="#284775" />  
               
        </div>  
              
            <div id="last">  
            <h3> 
                     MOHAMMAD HAJJAR 180290608 FIRAT univercity</h3>  
        </div>  
    </form>  
    </body>  
</html> 