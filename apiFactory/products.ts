import { axiosInstance } from "./axios.config";

export const documentApiFactory = {
  createDocument(payload: any) {
    return axiosInstance.post("/document", payload);
  },
  getDocumentsById(id: string) {
    return axiosInstance.get(`/document/${id}`);
  },
  getDocumentsList() {
    return axiosInstance.get("/document");
  },
  getDocumentBasedOnStep(id: string) {
    return axiosInstance.get(`/document/${id}/steps`);
  },
  getDocumentBasedOnWorkflow(id: string) {
    return axiosInstance.get(`/document/workflow/${id}`);
  },
  updateDocumentStep(documentId: string, documentStepId: string, payload: any){
    return axiosInstance.post(`/document/${documentId}/step/${documentStepId}/event`, payload);
  }
};
