package workforce.apis.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import workforce.apis.Entities.Employee;
import workforce.apis.Repositories.EmployeeRepository;

import javax.persistence.Column;
import java.lang.reflect.Field;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    private EmployeeRepository employeeRepo;

    public EmployeeService(@Autowired EmployeeRepository employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public Employee saveEmployee(Employee employee) {
        employeeRepo.save(employee);
        return employee;
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return this.employeeRepo.findById(id);
    }

    public List<Employee> getAllEmployees() {
        return this.employeeRepo.findAll();
    }

    public Optional<Employee> updateEmployee(Long id, Employee newData) {
        Optional<Employee> employee = this.employeeRepo.findById(id);
        if (!newData.getEmail().isEmpty()) {
            employee.get().setEmail(newData.getEmail());
        }
        if (!newData.getPassword().isEmpty()) {
            employee.get().setPassword(newData.getPassword());
        }
        if (!newData.getRole().isEmpty()) {
            employee.get().setRole(newData.getRole());
        }
        if (!newData.getOffice().isEmpty()) {
            employee.get().setOffice(newData.getOffice());
        }
        if (!newData.getFirstName().isEmpty()) {
            employee.get().setFirstName(newData.getFirstName());
        }
        if (!newData.getLastName().isEmpty()) {
            employee.get().setLastName(newData.getLastName());
        }
        if (!newData.getDob().equals(true)) {
            employee.get().setDob(newData.getDob());
        }
        if (!newData.getGender().isEmpty()) {
            employee.get().setGender(newData.getGender());
        }
        if (!newData.getAddress().isEmpty()) {
            employee.get().setAddress(newData.getAddress());
        }
        if (!newData.getLastUpdatedBy().isEmpty()) {
            employee.get().setLastUpdatedBy(newData.getLastUpdatedBy());
        }
        if (!newData.getTimeUpdated().equals(true)) {
            employee.get().setTimeUpdated(newData.getTimeUpdated());
        }
        this.employeeRepo.save(employee.get());
        return employee;
    }

    public Long deleteEmployeeById(Long id) {
        this.employeeRepo.deleteById(id);
        return id;
    }

    public EmployeeRepository getEmployeeRepo() {
        return employeeRepo;
    }

    public void setEmployeeRepo(EmployeeRepository employeeRepo) {
        this.employeeRepo = employeeRepo;
    }


}