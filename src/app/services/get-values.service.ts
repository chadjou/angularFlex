import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetValuesService {
  constructor(private http: HttpClient) {}
  serverUrl = "https://localhost:44358/api";
  sellerUrl = this.serverUrl + "/seller";
  terminalUrl = this.serverUrl + "/terminal";

  testValuesUrl = "https://localhost:44358/api/values";

  postValuesUrl = "https://localhost:44358/api/seller2";

  getTestValues() {
    return this.http.get(this.testValuesUrl);
  }

  getSellers() {
    return this.http.get(this.sellerUrl);
  }

  addSeller(qq: any): Observable<Object> {
    return this.http.post(this.sellerUrl, qq);
  }

  updateTerminal(qq: any): Observable<Object> {
    return this.http.put(this.terminalUrl, qq);
  }

  addNewTerminal(qq: any): Observable<Object> {
    return this.http.post(this.terminalUrl, qq);
  }

  deleteSeller(id: any): Observable<Object> {
    return this.http.request("delete", this.sellerUrl, { body: id });
  }

  updateSeller(qq: any): Observable<Object> {
    return this.http.put(this.sellerUrl, qq);
  }

  deleteTerminal(id: any): Observable<Object> {
    return this.http.request("delete", this.terminalUrl, { body: id });
  }
}
