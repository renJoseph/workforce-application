package workforce.apis.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import workforce.apis.Entities.Employee;
import workforce.apis.Services.EmployeeService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    public EmployeeController(@Autowired EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/save")
    public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee) {
        Employee newEmployee = this.employeeService.saveEmployee(employee);
        return ResponseEntity.status(HttpStatus.CREATED).body(newEmployee);
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable("id") Long id) {
        Optional<Employee> employee = this.employeeService.getEmployeeById(id);
        System.out.println(employee);
        if (employee.isPresent()) {
            return ResponseEntity.ok().body(employee.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/get")
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = this.employeeService.getAllEmployees();
        return ResponseEntity.ok().body(employees);
    }
    @PostMapping("/update/{id}")
    public ResponseEntity<Optional<Employee>> updateEmployee(@PathVariable("id") Long id, @RequestBody Employee newData) {
        Optional<Employee> updatedEmployee = this.employeeService.updateEmployee(id, newData);
        if (updatedEmployee.isPresent()) {
            return ResponseEntity.accepted().body(updatedEmployee);
        } else {
            return ResponseEntity.badRequest().body(updatedEmployee);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteEmployee(@PathVariable("id") Long id) {
        Optional<Employee> employee = this.employeeService.getEmployeeById(id);
        if (employee.isPresent()) {
            this.employeeService.deleteEmployeeById(id);
            return ResponseEntity.ok().body(employee);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public EmployeeService getEmployeeService() {
        return employeeService;
    }

    public void setEmployeeService(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
}
