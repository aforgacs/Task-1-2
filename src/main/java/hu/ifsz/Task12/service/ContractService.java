package hu.ifsz.Task12.service;

import com.ifsz.ifsz1.domain.Contract;
import com.ifsz.ifsz1.dto.ContractListItem;
import com.ifsz.ifsz1.dto.CreateContractCommand;
import com.ifsz.ifsz1.repository.ContractRepository;
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
}
