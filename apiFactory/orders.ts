import { axiosInstance } from './axios.config'
export const organizationApiFactory = {
  fetchOrganization() {
    return axiosInstance.get('/organizations');
  },
  deleteOrganization(id: string) {
    return axiosInstance.delete(`/organizations/${id}`);
  },
  createOrganizationMember(organizationId:string, payload: any) {
    return axiosInstance.post(`/organizations/${organizationId}/members`, payload);
  },
  getOrganizationMembers(organizationId: string) {
    return axiosInstance.get(`/organizations/${organizationId}/members`);
  },
  getEngagementSummary() {
    return axiosInstance.get('/story/engagement-summary');
  },
  deleteOrganizationMember(organizationId: string, userId: string) {
    return axiosInstance.delete(`organizations/${organizationId}/members/${userId}`);
  },
  createOrganization(payload: any) {
    return axiosInstance.post(`/organizations`, payload);
  },
};
