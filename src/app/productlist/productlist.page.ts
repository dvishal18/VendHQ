import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {

  
  jsonObject = [
    {
        "ID": "001", 
        "Name": "Adidas", 
        "Image": "https://wallpapercave.com/wp/wp2671830.jpg",
        "ShortDescription":"Donning the perfect pair of footwear is something that compliments the whole look put together by a man, in a big way.,",
        "DetailDescription":"$2000",
       

    },
    {
        "ID": "002", 
        "Name": "Nike", 
        "Image": "https://wallpapercave.com/wp/asmu9o0.jpg",
        "ShortDescription":"Donning the perfect pair of footwear is something that compliments the whole look put together by a man, in a big way.,",
        "DetailDescription":"$2000",
       
    },
    {
        "ID": "003", 
        "Name": "Puma", 
        "Image": "https://wallpaperset.com/w/full/7/4/b/474258.jpg",
        "ShortDescription":"Donning the perfect pair of footwear is something that compliments the whole look put together by a man, in a big way.,",
        "DetailDescription":"$2000",
        

    },
    {
      "ID": "004", 
      "Name": "Adidas", 
      "Image": "https://wallpapercave.com/wp/wp2671830.jpg",
      "ShortDescription":"Donning the perfect pair of footwear is something that compliments the whole look put together by a man, in a big way.,",
      "DetailDescription":"$2000",
     

  },
  {
      "ID": "005", 
      "Name": "Nike", 
      "Image": "https://wallpapercave.com/wp/asmu9o0.jpg",
      "ShortDescription":"Donning the perfect pair of footwear is something that compliments the whole look put together by a man, in a big way.,",
      "DetailDescription":"$2000",
     
  },
  {
      "ID": "006", 
      "Name": "Puma", 
      "Image": "https://wallpaperset.com/w/full/7/4/b/474258.jpg",
      "ShortDescription":"Donning the perfect pair of footwear is something that compliments the whole look put together by a man, in a big way.,",
      "DetailDescription":"$2000",
      

  },
  {
    "ID": "007", 
    "Name": "Adidas", 
    "Image": "https://wallpapercave.com/wp/wp2671830.jpg",
    "ShortDescription":"Donning the perfect pair of footwear is something that compliments the whole look put together by a man, in a big way.,",
    "DetailDescription":"$2000",
   

},
{
    "ID": "008", 
    "Name": "Nike", 
    "Image": "https://wallpapercave.com/wp/asmu9o0.jpg",
    "ShortDescription":"Donning the perfect pair of footwear is something that compliments the whole look put together by a man, in a big way.,",
    "DetailDescription":"$2000",
   
},
{
    "ID": "009", 
    "Name": "Puma", 
    "Image": "https://wallpaperset.com/w/full/7/4/b/474258.jpg",
    "ShortDescription":"Donning the perfect pair of footwear is something that compliments the whole look put together by a man, in a big way.,",
    "DetailDescription":"$2000",
    

},
    {
      "ID": "010", 
      "Name": "Adidas", 
      "Image": "https://wallpapercave.com/wp/wp2671830.jpg",
      "ShortDescription":"Donning the perfect pair of footwear is something that compliments the whole look put together by a man, in a big way.,",
      "DetailDescription":"$2000",
    
  },
]
  constructor() { }

  ngOnInit() {
  }

}
