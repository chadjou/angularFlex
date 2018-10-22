import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RequestOptions, Request, RequestMethod } from "@angular/http";
@Injectable({
  providedIn: "root"
})
export class GetValuesService {
  constructor(private http: HttpClient) {}
  configUrl = "https://localhost:44358/api/values";
  sellersUrl = "https://localhost:44358/api/Sellers";
  postSellerUrl = "https://localhost:44358/api/seller";
  deleteSellerUrl = "https://localhost:44358/api/deleteseller2";
  updateSellerUrl = "https://localhost:44358/api/updateseller2";

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

  deleteSeller(id: any): Observable<Object> {
    return this.http.request("delete", this.deleteSellerUrl, { body: id });
  }

  updateSeller(qq: any): Observable<Object> {
    return this.http.put(this.updateSellerUrl, qq);
  }
}
