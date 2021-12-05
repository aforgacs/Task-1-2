package hu.ifsz.Task12.service;


import hu.ifsz.Task12.domain.Contract;
import hu.ifsz.Task12.dto.ContractListItem;
import hu.ifsz.Task12.dto.CreateContractCommand;
import hu.ifsz.Task12.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class ContractService {

    private ContractRepository contractRepository;

    @Autowired
    public ContractService(ContractRepository contractRepository) {
        this.contractRepository = contractRepository;
    }


    public void createNewContract(CreateContractCommand createContractCommand) {
        Contract contract = new Contract(
                createContractCommand
        );
        contractRepository.save(contract);
    }


    public List<ContractListItem> listContracts() {
        return contractRepository.findAll().stream().map(ContractListItem::new).collect(Collectors.toList());
    }


    public Contract updateContract(CreateContractCommand contract, Long id) {
        Optional<Contract> contractOptional = contractRepository.findById(id);
        Contract contract1 = null;
        if (contractOptional.isPresent()) {
            contract1 = contractOptional.get();
            updateValues(contract, contract1);
        }
        return contract1;
    }

    private void updateValues(CreateContractCommand createContractCommand, Contract contract) {

            contract.setMegnevezes(createContractCommand.getMegnevezes());
            contract.setErtek(createContractCommand.getErtek());
            if((createContractCommand.getErv_vege().after(contract.getErv_kezdete()))){
                contract.setErv_vege(createContractCommand.getErv_vege());
            }
            contract.setAktiv(createContractCommand.getAktiv());

    }


public CreateContractCommand getContractDetails(Long id) {
    CreateContractCommand contractDetails = null;
    Optional<Contract> contractOptional = contractRepository.findById(id);
    if (contractOptional.isPresent()) {
        contractDetails = new CreateContractCommand(contractOptional.get());
    }
    return contractDetails;
}


}


