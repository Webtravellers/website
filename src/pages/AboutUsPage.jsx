import React from "react";
import img3 from "../assets/imgs/img3.PNG";
import  {Table} from 'reactstrap';


const AboutUsPage = () => {
    return(
        <Table>
            <tr><center><td><img src={img3} alt = "img" /></td></center></tr>
            <tr>
            <td>İSİM</td>
            <td>EMAİL ADRESİ</td>
            </tr>
            <tr>
            <td><input type = "text" name = "isim" placeholder = "İsminizi girin..."/></td>
            <td><input type = "text" name = "email" placeholder = "Emailinizi girin..." /></td>
            </tr>
            <tr>
            <td>KONU</td>
            <td>SEYAHAT TÜRÜ</td>
            </tr>
            <tr>
            <td><input type = "text" name = "konu" placeholder = "Konuyu girin..."/></td>
			<td>
            <select name="seyahat" placeholder="Seçiniz">
                <option>Eğlence</option>
                <option>Müze</option>
                <option>Doğal Güzellik</option>
            </select>
			</td>
            </tr>
            <tr><td colspan = "2">Mesajınız</td></tr>
            <tr>
			<td colspan = "2">
			<textarea name="comments" cols="40" rows="6" placeholder = "Mesajınızı giriniz..."></textarea> 
			</td>
            </tr>
        </Table>
    )
}

export default AboutUsPage