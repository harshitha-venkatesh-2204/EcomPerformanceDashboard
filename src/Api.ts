import axios from 'axios';

interface TotalSalesPerCategoryResponse {
    product_category_name: string;
    total_sales: number;
}

interface OrdersPerStateResponse {
    state: string;
    num_orders: number;
}

interface AverageDeliveryDelayPerCategoryResponse {
    product_category_name: string;
    average_delivery_delay: number;
}


class API{

    private API_URL = "http://localhost:5000" 
    constructor(){
    }
    get_total_sales_per_category({all=false}:any={}){
        let params = {}
        if(all){
            params["all"] = true
        }
        return axios.get<TotalSalesPerCategoryResponse[]>(`${this.API_URL}/total_sales_per_category`, {params})
    }

    get_orders_per_state(){
        return axios.get<OrdersPerStateResponse[]>(`${this.API_URL}/orders_per_state`)
    }

    get_average_delivery_delay_per_category(){
        return axios.get<AverageDeliveryDelayPerCategoryResponse[]>(`${this.API_URL}/average_delivery_delay_per_category`)


    }


}
const api = new API();

export default api
