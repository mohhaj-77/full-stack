namespace Application
{  
    public partial class Demo System.Web.UI.Page  
    {  
      protected void Page_Load(object sender, EventArgs e)  
      {  
        SqlCommand sqlquery;
        SqlDataReader dataReader;
        String Output =" ";
        sql = "Select TutorialID,TutorialName from tttb";
        
        sqlquery = new SqlCommand(sql, cnn);
        
        dataReader = command.ExecuteReader();
        while (dataReader.Read())
        {
          Output = Output + dataReader.GetValue(0) + "-" + dataReader.GetValue(1) + "</br>";
        }
        
        Response.Write(Output); 
        dataReader.Close();
        command.dispose();
        conn.Close();       
      }
    }
}

