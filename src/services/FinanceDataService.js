import http from "../http-common";

class FinanceDataService {
    getAll(){
        return http.get("/transactions?_sort=time&_order=desc")
    }
    get(id){
        return http.get(`/transactions/${id}`);
    }
    create(data){
        return http.post("/transactions",data);
    }
    update(id,data){
        return http.put(`/transactions/${id}`,data)
    }
    delete(id){
        return http.delete(`/transactions/${id}`)
    }
}
export default new FinanceDataService();

