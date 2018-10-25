import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RequestOptions, Request, RequestMethod } from "@angular/http";
@Injectable({
  providedIn: "root"
})
export class GetValuesService {
  constructor(private http: HttpClient) {}
  testValuesUrl = "https://localhost:44358/api/values";
  sellersUrl = "https://localhost:44358/api/Sellers";
  postSellerUrl = "https://localhost:44358/api/seller";
  deleteSellerUrl = "https://localhost:44358/api/deleteseller2";
  updateSellerUrl = "https://localhost:44358/api/updateseller2";

  addTerminalUrl = "https://localhost:44358/api/terminal";

  deleteTerminalUrl = "https://localhost:44358/api/deleteterminal";

  testbody = { name: "test2" };

  getTestValues() {
    return this.http.get(this.testValuesUrl);
  }

  getSellers() {
    return this.http.get(this.sellersUrl);
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

  addNewTerminal(qq: any): Observable<Object> {
    return this.http.post(this.addTerminalUrl, qq);
  }

  updateTerminal(qq: any): Observable<Object> {
    return this.http.put(this.addTerminalUrl, qq);
  }

  deleteTerminal(id: any): Observable<Object> {
    return this.http.request("delete", this.deleteTerminalUrl, { body: id });
  }
}
