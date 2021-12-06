package hu.ifsz.Task12.controller;


import hu.ifsz.Task12.domain.Contract;
import hu.ifsz.Task12.dto.ContractListItem;
import hu.ifsz.Task12.dto.CreateContractCommand;
import hu.ifsz.Task12.dto.UpdateContractCommand;
import hu.ifsz.Task12.service.ContractService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/contracts")
public class ContractController {

    private ContractService contractService;
    public static Logger logger = LoggerFactory.getLogger(ContractController.class);

    public ContractController(ContractService contractService) {
        this.contractService = contractService;
    }


    @PostMapping
    public ResponseEntity createExpense(@RequestBody @Valid CreateContractCommand command) {
        contractService.createNewContract(command);
        logger.info("Contract is created");
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ContractListItem>> getExpenses() {
        logger.info("Contracts list page is requested");
        return new ResponseEntity<>(contractService.listContracts(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UpdateContractCommand> updateContract(@PathVariable Long id) {
        return new ResponseEntity<>(contractService.getContractDetails(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateContract(@Valid @RequestBody CreateContractCommand contract, @PathVariable Long id) {
        Contract updatedContract = contractService.updateContract(contract, id);
        return contract != null ? new ResponseEntity(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
