import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetValuesService {
  constructor(private http: HttpClient) {}
  configUrl = "https://localhost:44358/api/values";
  sellersUrl = "https://localhost:44358/api/Sellers";
  postSellerUrl = "https://localhost:44358/api/seller";

  testbody = { name: "test2" };

  getConfig() {
    return this.http.get(this.configUrl);
  }

  getSellers() {
    return this.http.get(this.sellersUrl);
  }

  postSeller(): Observable<Object> {
    return this.http.post(this.postSellerUrl, this.testbody);
  }
  postSeller2(qq: any): Observable<Object> {
    return this.http.post(this.postSellerUrl, qq);
  }
}
